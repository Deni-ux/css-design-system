const tabList = document.querySelector('[role="tablist"]');

const tabs = tabList.querySelectorAll('[role="tab"]');


//EVENTS
tabList.addEventListener('keydown', changeTabFocus);
tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});


//select tab focus
let tabFocus = 0;
//add function tab focus
function changeTabFocus(e) {
     const keydownLeft = 37;
    const keydownRight = 39;

    //change the tabindex of current tab to -1 cycle throught the tabs
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }
    //if right key is pushed , move to the next tab on the right
    if (e.keyCode === keydownRight) {
        tabFocus++;
        //return back to the first selection
        if (tabFocus >= tabs.length) {
            tabFocus = 0
        }
    }
    //if left key is pushed move to the next tab on the left
    if (e.keyCode === keydownLeft) {
        tabFocus--;
        //lowest value is 0 and tab length is 0 1 2 3 , that's why we add a -1
        if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
        }
    
 }
        //move focus to that tab
        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
};
//keyboard nav - keyboard event

//change tab panel 
function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");
    //select the parent
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

 tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
    
    targetTab.setAttribute("aria-selected", true);

//go through each panel info where the main container is the parent and panel = content
    mainContainer
        .querySelectorAll('[role="tabpanel"]')
        .forEach((panel) => panel.setAttribute("hidden", true));
    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');

    console.log(mainContainer);

    mainContainer
        .querySelectorAll('picture')
        .forEach((picture) => picture.setAttribute("hidden", true));
   mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');

   


//     hideContent(mainContainer, '[role="tabpanel"]');
//     showContent(mainContainer, [`#${targetPanel}`]);
//     hideContent(mainContainer, 'picture');
//     showContent(mainContainer, [`#${targetImage}`]);

    //  
}

// function hideContent(parent, content) {
//     parent
//         .querySelectorAll(content)

//         .forEach((item) => item.setAttribute("hidden", true));
// }

// function showContent(parent, content) {
//     parent.querySelector(content).removeAttribute('hidden');
// }

//cycle through each individual tab

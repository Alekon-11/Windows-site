const tabs = (parentSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const parent = document.querySelector(parentSelector);
    let tabs = document.querySelectorAll(tabSelector);
    let content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        tabs.forEach(item => item.classList.remove(activeClass));
        content.forEach(item => item.style.display = 'none');
    }

    function showTabContent(i = 0) {
        tabs[i].classList.add(activeClass);
        content[i].style.display = display;
    }

    parent.addEventListener('click', (e) => {
        tabs = document.querySelectorAll(tabSelector);
        if(e.target && e.target.matches(tabSelector) || e.target.parentNode.matches(tabSelector)){
            tabs.forEach((item, num) => {
                if(item === e.target || item === e.target.parentNode){
                    hideTabContent();
                    showTabContent(num);
                }
            });
        }
    });

    hideTabContent();
    showTabContent();
};

export default tabs;
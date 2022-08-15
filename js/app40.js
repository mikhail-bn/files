(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const listOfParagrafs = document.querySelectorAll(`p`);
    const listOfButtons = document.querySelectorAll(`.block__button`);
    const pageItem = document.querySelector(`.page`);
    const itemFive = listOfParagrafs[4];
    const itemTen = listOfParagrafs[9];
    const itemLast = pageItem.lastElementChild;
    const itemFirstButton = listOfButtons[0];
    const itemSecondButton = listOfButtons[1];
    const itemThirdButton = listOfButtons[2];
    const itemLastButton = listOfButtons[3];
    itemLastButton.addEventListener(`click`, scrollToTop);
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    itemSecondButton.addEventListener(`click`, scrollItemFive);
    function scrollItemFive() {
        itemFive.scrollIntoView({
            top: 0,
            behavior: "smooth"
        });
    }
    itemThirdButton.addEventListener(`click`, scrollItemTen);
    function scrollItemTen() {
        itemTen.scrollIntoView({
            top: 0,
            behavior: "smooth"
        });
    }
    itemFirstButton.addEventListener(`click`, scrollToEnd);
    function scrollToEnd(top) {
        itemLast.scrollIntoView(top);
    }
    itemFive.style.cssText = `\n\tcolor: white;\n\tbackground-color: rgb(112, 192, 112);\n\t`;
    itemTen.style.cssText = `\n\tcolor: white;\n\tbackground-color: rgb(156, 125, 240);\n\t`;
    itemSecondButton.style.cssText = `\n\tcolor: white;\n\tbackground-color: rgb(112, 192, 112);\n\t`;
    itemThirdButton.style.cssText = `\n\tcolor: white;\n\tbackground-color: rgb(156, 125, 240);\n\t`;
    window["FLS"] = true;
    isWebp();
})();
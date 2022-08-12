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
    const screen = document.querySelector(`.screen`);
    const screenItem = screen.querySelector(`.screen__item`);
    const screenItemSizes = {
        width: screenItem.offsetWidth,
        height: screenItem.offsetHeight
    };
    window.addEventListener(`scroll`, moveItem);
    function moveItem() {
        const windowHeight = window.innerHeight - screenItemSizes.width;
        const windowWidth = window.innerWidth;
        const scrollTop = window.scrollY;
        screenItemSizes.width;
        const scrollingProcent = scrollTop / windowHeight * 100;
        const endPoint = windowWidth - screenItemSizes.width;
        const currentPointLeft = endPoint / 100 * scrollingProcent;
        const currentPointRotate = 360 / 100 * scrollingProcent;
        const currentPointScale = 1 - .3 / 100 * scrollingProcent;
        screenItem.style.cssText = `\n\t\tleft: ${currentPointLeft}px;\n\t\ttransform: scale(${currentPointScale}) rotate(${currentPointRotate}deg);\n\t\t`;
    }
    window["FLS"] = true;
    isWebp();
})();
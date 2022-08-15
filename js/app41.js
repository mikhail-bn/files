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
    const setWindow = document.documentElement;
    const innerWindow = setWindow.clientWidth;
    const outerWindow = window.innerWidth;
    const scrollingWidth = outerWindow - innerWindow;
    const elemPoint = document.elementsFromPoint(300, 300);
    const elemTen = document.querySelector(`.page__item10`);
    const getCoordsElemTen = elemTen.getBoundingClientRect();
    const elemSeven = document.querySelector(`.page__item7`);
    const getCoordsElemSeven = elemSeven.getBoundingClientRect();
    const elemTwo = document.querySelector(`.page__item2`);
    const getCoordsElemTwo = elemTwo.getBoundingClientRect();
    window.scrollTo({
        top: 1300,
        behavior: "smooth"
    });
    function setScrollingTo() {
        window.scrollTo({
            top: 100,
            behavior: "smooth"
        });
    }
    setTimeout(setScrollingTo, 3e3);
    function setScrollingTimeTo() {
        window.scrollTo({
            top: 650,
            behavior: "smooth"
        });
    }
    setTimeout(setScrollingTimeTo, 5e3);
    console.log(innerWindow);
    console.log(outerWindow);
    console.log(`Ширина полосы прокрутки - ${scrollingWidth}px`);
    console.log(elemPoint);
    console.log(getCoordsElemTen);
    console.log(getCoordsElemSeven);
    console.log(getCoordsElemTwo);
    window["FLS"] = true;
    isWebp();
})();
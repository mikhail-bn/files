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
    const header = document.querySelector(`.sector`);
    const block = document.querySelector(`.some-block`);
    const headerHeight = header.offsetHeight;
    console.log(headerHeight);
    window.addEventListener(`scroll`, setHeaderStyle);
    function setHeaderStyle(e) {
        const moment = headerHeight + 10;
        if (block.getBoundingClientRect().top <= moment) {
            header.style.top = `${block.offsetTop - moment}px`;
            header.classList.add(`active`);
        } else {
            header.classList.remove(`active`);
            header.style.top = ``;
        }
    }
    const sectorButton = document.querySelector(`.sector__button`);
    sectorButton.addEventListener("click", (function(e) {
        const goTo = block.offsetTop;
        window.scrollTo({
            top: goTo,
            behavior: "smooth"
        });
    }));
    window["FLS"] = true;
    isWebp();
})();
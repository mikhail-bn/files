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
    const txtItem = document.querySelector(`.form__textarea`);
    const txtItemLimit = txtItem.getAttribute(`maxlength`);
    const txtCounter = document.querySelector(`.textarea__counter span`);
    txtCounter.innerHTML = txtItemLimit;
    txtItem.addEventListener(`input`, txtSetCounter);
    
    function txtSetCounter() {
        const txtCounterResult = txtItemLimit - txtItem.value.length;
        txtCounter.innerHTML = txtCounterResult;
    }
    window["FLS"] = true;
    isWebp();
})();
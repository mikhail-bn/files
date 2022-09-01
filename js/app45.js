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
    const mainForm = document.forms.main;
    const mainFormInput = mainForm.nameInput;
    const mainFormTextarea = mainForm.nameTextarea;
    const mainFormRadioButtons = mainForm.nameRadio;
    mainFormRadioButtons[1].checked = true;
    const mainFormCheckBox = mainForm.nameCheck;
    mainFormCheckBox.checked = true;
    const mainFormFile = mainForm.nameFile;
    mainFormFile.value = "";
    const mainFormSelect = mainForm.nameSelect;
    mainFormSelect.value = 2;
    let newOption = new Option("60", "4", true, true);
    mainFormSelect.append(newOption);
    const mainFormInputPlaceholder = mainFormInput.placeholder;
    mainFormInput.addEventListener("focus", (function(e) {
        mainFormInput.placeholder = "";
    }));
    mainFormInput.addEventListener("blur", (function(e) {
        mainFormInput.placeholder = mainFormInputPlaceholder;
    }));
    mainFormTextarea.focus();
    setTimeout((() => {
        mainFormTextarea.blur();
    }), 3e3);
    const lesson = document.querySelector(".lesson");
    lesson.addEventListener("focus", (function(e) {
        lesson.classList.add(`focus`);
    }));
    lesson.addEventListener("blur", (function(e) {
        lesson.classList.remove(`focus`);
    }));
    mainForm.addEventListener("focusin", (function(e) {
        mainForm.classList.add(`active`);
    }));
    mainForm.addEventListener("focusout", (function(e) {
        mainForm.classList.remove(`active`);
    }));
    mainForm.addEventListener("submit", (function(event) {
        if (!mainFormInput.value) {
            event.preventDefault();
            alert(`Поле ввода не заполнено!`);
        }
    }));
    mainForm.addEventListener("submit", (function(event) {
        if (emailTest(mainFormInput)) {
            mainFormInput.parentElement.insertAdjacentHTML("beforeend", `<div class="main-form__error">Ведите email</div>`);
            event.preventDefault();
        }
    }));
    mainFormInput.addEventListener("focus", (function(event) {
        if (mainFormInput.nextElementSibling) mainFormInput.nextElementSibling.remove();
    }));
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    mainFormFile.addEventListener("change", (function(e) {
        let selectedFile = mainFormFile.files[0];
        let fileUrl = URL.createObjectURL(selectedFile);
        mainFormFile.parentElement.insertAdjacentHTML("beforeend", `<div class="main-form__image">\n\t\t<img alt="" title="${selectedFile.name}" src="${fileUrl}">\n\t\t</div>`);
    }));
    mainForm.addEventListener("submit", (function(event) {
        if (mainFormTextarea.value) {
            event.preventDefault();
            alert(`Текстовое поле не должно быть заполнено!`);
        }
    }));
    window["FLS"] = true;
    isWebp();
})();
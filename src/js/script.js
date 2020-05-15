"use strict";
function loaderProcess() {
    var mytime = setInterval(loaderProcessElement, 1000);
}
function loaderProcessElement() {
    var date = new Date().getSeconds();
    var processVar = (date / 60) * 100;
    var processId = document.getElementById('processbar');
    if (processId)
        processId.value = processVar;
}
loaderProcess();
function menuOnRightTop() {
    var ddmenu = document.getElementById("ddmenu");
    if (ddmenu)
        ddmenu.classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.cta-contact')) {
        var dropdown = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdown.length; i++) {
            var openDropdown = dropdown[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
//# sourceMappingURL=script.js.map
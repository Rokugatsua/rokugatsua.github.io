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
//# sourceMappingURL=script.js.map
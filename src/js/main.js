"use strict";
function writeElFootNav(htmlid, url, imgPath) {
    var ul = document.getElementById(htmlid);
    var li = document.createElement("li");
    var a = document.createElement("a");
    var img = document.createElement("img");
    var href = document.createAttribute("href");
    var srcs = document.createAttribute("src");
    if (ul)
        ul.appendChild(li);
    li.appendChild(a);
    a.setAttribute("href", url);
    a.appendChild(img);
    img.setAttribute("src", imgPath);
}
writeElFootNav("foot-nav", "https://github.com/rokugatsua", "src/img/icons8-github-50.png");
writeElFootNav("foot-nav", "https://linkedin.com/in/juniansyahs", "src/img/icons8-linkedin-50.png");
//# sourceMappingURL=main.js.map
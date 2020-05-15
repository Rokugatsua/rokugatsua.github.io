"use strict";
function writeArticle(article) {
    var contenBox = document.getElementById("content-box");
    var div = document.createElement("div");
    var header = document.createElement("header");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");
    if (contenBox)
        contenBox.appendChild(div);
    div.appendChild(header);
    header.appendChild(h3);
    h3.textContent = article.title;
    div.appendChild(p);
    p.textContent = article.content;
}
var artivl = { title: "Welcome ", content: "print('Hello, World from python 3')" };
writeArticle(artivl);
//# sourceMappingURL=contents.js.map
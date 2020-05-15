"use strict";
function writeArticle(article) {
    var contenBox = document.getElementById("content-box");
    var articleEl = document.createElement("article");
    var header = document.createElement("header");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");
    var footerEl = document.createElement("footer");
    var fSmall = document.createElement("small");
    if (contenBox)
        contenBox.appendChild(articleEl);
    articleEl.setAttribute("class", "contents");
    articleEl.appendChild(header);
    header.appendChild(h3);
    h3.textContent = article.title;
    articleEl.appendChild(p);
    p.textContent = article.content;
    articleEl.appendChild(footerEl);
    footerEl.appendChild(fSmall);
    fSmall.textContent = article.nb;
}
var artivl = { title: "Welcome ", content: "print('Hello, World from python 3')", nb: "" };
var artivl2 = {
    title: "About",
    content: "This site and all using Typescript 3.8,  \n    for DOM content using traditional function. \n    you can access see ts file via inspect or visit this repository\n    https://github.com/Rokugatsua/rokugatsua.github.io ",
    nb: ""
};
writeArticle(artivl);
writeArticle(artivl2);
//# sourceMappingURL=contents.js.map
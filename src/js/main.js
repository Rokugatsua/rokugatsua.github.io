"use strict";
function writeAboutHtml(htmlid, article) {
    var aboutHtml = document.getElementById(htmlid);
    var artcleHtml = document.createElement("article");
    var headerHtml = document.createElement("header");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");
    if (aboutHtml)
        aboutHtml.appendChild(artcleHtml);
    artcleHtml.setAttribute("class", "contents");
    artcleHtml.appendChild(headerHtml);
    headerHtml.appendChild(h3);
    h3.textContent = article.title;
    artcleHtml.appendChild(p);
    p.textContent = article.content;
}
function writeSociList(htmlid, soci) {
    var ulId = document.getElementById(htmlid);
    var li = document.createElement("li");
    var a = document.createElement("a");
    var img = document.createElement("img");
    if (ulId)
        ulId.appendChild(li);
    li.textContent = soci.name;
    li.appendChild(a);
    a.setAttribute("href", soci.url);
    a.textContent = soci.url;
    if (soci.imgPath !== "") {
        a.appendChild(img);
        img.setAttribute("src", soci.imgPath);
    }
}
function writeContactHtml(htmlid, article) {
    var aboutHtml = document.getElementById(htmlid);
    var artcleHtml = document.createElement("article");
    var headerHtml = document.createElement("header");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");
    var ul = document.createElement("ul");
    if (aboutHtml)
        aboutHtml.appendChild(artcleHtml);
    artcleHtml.setAttribute("class", "contents");
    artcleHtml.appendChild(headerHtml);
    headerHtml.appendChild(h3);
    h3.textContent = article.title;
    artcleHtml.appendChild(p);
    p.textContent = article.content;
    artcleHtml.appendChild(ul);
    var htmlIdSoci = "list-soci";
    ul.setAttribute("id", htmlIdSoci);
    var mail = { name: "E-mail  :  ", url: "mailto:rokugatsua@outlook.co.id", imgPath: "" };
    var igsoci = { name: "Instagram  :  ", url: "https://instagram.com/rokugatsu_a", imgPath: "" };
    var fbsoci = { name: "Facebook  :  ", url: "https://facebook.com/aan.juniansyah.940", imgPath: "" };
    writeSociList(htmlIdSoci, mail);
    writeSociList(htmlIdSoci, igsoci);
    writeSociList(htmlIdSoci, fbsoci);
}
function toggleAboutHtml() {
    var _a;
    var contentBox = "content-box";
    var contentsHtml = document.getElementsByClassName("contents");
    if (contentsHtml) {
        while (contentsHtml.length > 0) {
            (_a = contentsHtml[0].parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(contentsHtml[0]);
        }
    }
    var aboutMe = {
        title: "About Me",
        content: "Hello, my name is Juniansyah. i from indonesia. \n        i learn code Python and Typescript for getting job.\n        because my degree background is not compatible with this carrer,\n        i try hard for find some opportunites.  learn hard code and enjoy with Aimer song.",
        nb: ""
    };
    writeAboutHtml(contentBox, aboutMe);
}
function toggleContactHtml() {
    var _a;
    var contentBox = "content-box";
    var contentsHtml = document.getElementsByClassName("contents");
    if (contentsHtml) {
        while (contentsHtml.length > 0) {
            (_a = contentsHtml[0].parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(contentsHtml[0]);
        }
    }
    var contactMe = {
        title: "Contact",
        content: "intrest to hire me into your team?",
        nb: ""
    };
    writeContactHtml(contentBox, contactMe);
}
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
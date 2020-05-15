interface socialLinkList{
    name:string;
    url:string;
    imgPath:string;
}

function writeElFootNav (htmlid:string,url:string, imgPath:string) {
    const ul = document.getElementById(htmlid)
    const li = document.createElement("li")
    const a = document.createElement("a")
    const img = document.createElement("img")
    const href = document.createAttribute("href")
    const srcs = document.createAttribute("src")

    if(ul) (ul as HTMLElement).appendChild(li)
    li.appendChild(a)
    a.setAttribute("href",url)
    a.appendChild(img)
    img.setAttribute("src",imgPath)
}

writeElFootNav("foot-nav","https://github.com/rokugatsua","src/img/icons8-github-50.png")
writeElFootNav("foot-nav","https://linkedin.com/in/juniansyahs","src/img/icons8-linkedin-50.png")
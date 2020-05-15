interface Article {
    title:string
    content:string
    nb:string
}

function writeArticle(article:Article) {
    let contenBox = document.getElementById("content-box")
    let articleEl = document.createElement("article")
    let header = document.createElement("header")
    let h3 = document.createElement("h3")
    let p = document.createElement("p")
    let footerEl = document.createElement("footer")
    let fSmall = document.createElement("small")

    if (contenBox) (contenBox as HTMLElement).appendChild(articleEl)
    articleEl.setAttribute("class","contents")
    articleEl.appendChild(header)
    header.appendChild(h3)
    h3.textContent = article.title
    articleEl.appendChild(p)
    p.textContent = article.content
    articleEl.appendChild(footerEl)
    footerEl.appendChild(fSmall)
    fSmall.textContent = article.nb
}

var artivl = {title: "Welcome ", content:"print('Hello, World from python 3')",nb:""}
var artivl2 = {
    title: "About this", 
    content:`This site and all using Typescript 3.8,  
    for DOM content using traditional function. 
    you can access and see ts file via inspect or visit this repository
    https://github.com/Rokugatsua/rokugatsua.github.io `,
    nb:""
}
var artivl3 ={
    title: "Prologue of Hij",
    content: `Hij is media website for media news,
    built with Django and host with Heroku, you can 
    visit http://hij-media.herokuapp.com`,
    nb:"-- the website under development."
}

writeArticle(artivl)
writeArticle(artivl2)
writeArticle(artivl3)

interface Article {
    title:string
    content:string
}

function writeArticle(article:Article) {
    let contenBox = document.getElementById("content-box")
    let div = document.createElement("div")
    let header = document.createElement("header")
    let h3 = document.createElement("h3")
    let p = document.createElement("p")

    if (contenBox) (contenBox as HTMLElement).appendChild(div)
    div.appendChild(header)
    header.appendChild(h3)
    h3.textContent = article.title
    div.appendChild(p)
    p.textContent = article.content
}

var artivl = {title: "Welcome ", content:"print('Hello, World from python 3')"}

writeArticle(artivl)

interface socialLinkList{
    name:string;
    url:string;
    imgPath:string;
}

function writeAboutHtml(htmlid:string, article:Article) {
    let aboutHtml = document.getElementById(htmlid)
    let artcleHtml= document.createElement("article")
    let headerHtml = document.createElement("header")
    let h3 = document.createElement("h3")
    let p = document.createElement("p")

    if (aboutHtml) (aboutHtml as HTMLElement).appendChild(artcleHtml)
    artcleHtml.setAttribute("class","contents")
    artcleHtml.appendChild(headerHtml)
    headerHtml.appendChild(h3)
    h3.textContent = article.title
    artcleHtml.appendChild(p)
    p.textContent = article.content
}

function writeSociList(htmlid:string, soci:socialLinkList){
    let ulId = document.getElementById(htmlid)
    let li = document.createElement("li")
    let a = document.createElement("a")
    let img = document.createElement("img")

    if(ulId) (ulId as HTMLElement).appendChild(li)
    li.textContent = soci.name
    li.appendChild(a)
    a.setAttribute("href",soci.url)
    a.textContent = soci.url
    if(soci.imgPath !== ""){
        a.appendChild(img)
        img.setAttribute("src",soci.imgPath)
    }

    
}

function writeContactHtml(htmlid:string, article:Article){
    let aboutHtml = document.getElementById(htmlid)
    let artcleHtml= document.createElement("article")
    let headerHtml = document.createElement("header")
    let h3 = document.createElement("h3")
    let p = document.createElement("p")
    let ul = document.createElement("ul")

    if (aboutHtml) (aboutHtml as HTMLElement).appendChild(artcleHtml)
    artcleHtml.setAttribute("class","contents")
    artcleHtml.appendChild(headerHtml)
    headerHtml.appendChild(h3)
    h3.textContent = article.title
    artcleHtml.appendChild(p)
    p.textContent = article.content
    artcleHtml.appendChild(ul)
    
    var htmlIdSoci = "list-soci"
    ul.setAttribute("id",htmlIdSoci)

    var mail:socialLinkList = {name:"E-mail  :  ",url:"mailto:rokugatsua@outlook.co.id",imgPath:""}
    var igsoci:socialLinkList = {name:"Instagram  :  ", url:"https://instagram.com/rokugatsu_a",imgPath:""}
    var fbsoci:socialLinkList = {name:"Facebook  :  ", url:"https://facebook.com/aan.juniansyah.940",imgPath:""}

    writeSociList(htmlIdSoci,mail)
    writeSociList(htmlIdSoci,igsoci)
    writeSociList(htmlIdSoci,fbsoci)

}


function toggleAboutHtml(){
    let contentBox:string = "content-box"
    let contentsHtml = document.getElementsByClassName("contents")

    if (contentsHtml) {
        while(contentsHtml.length > 0){
            contentsHtml[0].parentNode?.removeChild(contentsHtml[0])
        }
    }
    let aboutMe = {
        title:"About Me",
        content:`Hello, my name is Juniansyah. i from indonesia. 
        i learn code Python and Typescript for getting job.
        because my degree background is not compatible with this carrer,
        i try hard for find some opportunites.  learn hard code and enjoy with Aimer song.`,
        nb:""
    }
    writeAboutHtml(contentBox,aboutMe)
}
function toggleContactHtml(){
    let contentBox:string = "content-box"
    let contentsHtml = document.getElementsByClassName("contents")

    if (contentsHtml) {
        while(contentsHtml.length > 0){
            contentsHtml[0].parentNode?.removeChild(contentsHtml[0])
        }
    }
    let contactMe = {
        title:"Contact",
        content:`interest to hire me into your team?`,
        nb:""
    }
    writeContactHtml(contentBox,contactMe)
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
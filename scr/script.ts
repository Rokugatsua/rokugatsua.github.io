function loaderProcess(){
    let mytime = setInterval(loaderProcessElement,1000)    
}

function loaderProcessElement(){
    const date = new Date().getSeconds()
    var processVar: number = (date / 60) * 100

    const processId = document.getElementById('processbar')
    if (processId) (processId as HTMLProgressElement).value = processVar
}

loaderProcess() 

function menuOnRightTop(){
    let ddmenu = document.getElementById("ddmenu")
    if(ddmenu) (ddmenu as HTMLElement).classList.toggle("show")
}

window.onclick = function(event:any) {
    if (!event.target.matches('.cta-contact')){
        var dropdown = document.getElementsByClassName("dropdown-content")
        var i

        for ( i = 0; i < dropdown.length; i++){
            var openDropdown = dropdown[i]
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show')
            }
        }
    }
}
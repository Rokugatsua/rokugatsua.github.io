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
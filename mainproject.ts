function funcClick() {
    
    var elem = document.createElement('div');
    elem.style.cssText = 'border:2px solid red; width:90%; height:40px; margin-left: auto; margin-right: auto; margin-bottom: 5px;'
    elem.setAttribute("ondrop","drop(event)");
    elem.setAttribute("ondragover","allowDrop(event)");
    elem.setAttribute("id","div1");

    


    document.getElementById('divleft')?.appendChild(elem);
    
}

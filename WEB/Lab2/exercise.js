var el = document.getElementsByClassName('topmenu');
for(var i=0; i<el.length; i++) {
   el[i].addEventListener("mouseover", showSub, false);
   el[i].addEventListener("mouseout", hideSub, false);
   for(li of el[i].querySelectorAll(".submenu > li")){
    li.addEventListener("mouseover", show, false);
    li.addEventListener("mouseout", hide, false);
    }
}
window.onload = init;

function init(){
    var button = document.getElementById("button")
    button.onclick = handleButtonClick;
}

function handleButtonClick() {
    var a = document.getElementById('inp_1').value;
    var b = document.getElementById('inp_2').value;
    var images = [];
    for (var i = 0; i < 4; i++){
        var s = i+1;
        images.push(document.getElementById('img' + s));
    } 
    if (a != b && a > 0 && a < 5 && b >0 && b < 5)
    {
        var src_a = images[a-1].src;
        images[a-1].src = images[b-1].src;
        images[b-1].src = src_a;
    }
    else if (a == b && a != '' || b != '' && a > 0 && a < 5 && b >0 && b < 5)
    {
        alert('Нельзя поменять одну и ту же картинку местами!!!');
    }
    else
    {
        alert('Неверный ввод!!!');
    }
}
function showSub(e) {
   if(this.children.length>1) {
      this.children[1].style.height = "auto";
      this.children[1].style.overflow = "visible";
      this.children[1].style.opacity = "1";
      let a = event.currentTarget.querySelector(".text");
      if(a) {
        a.style.background = "#FFFFFF";
    }
   } else {
      return false;
   }
}
function hideSub(e) {
    if(this.children.length>1) {
      this.children[1].style.height = "0px";
       this.children[1].style.overflow = "hidden";
       this.children[1].style.opacity = "0";
       let a = event.currentTarget.querySelector(".text");
        if(a) {
            a.style.background = "transparent";
        }
    } 
    else {
       return false;
    }
}
function show(e) {
    let a = event.currentTarget.querySelector(".text");
    if(a) {
        a.style.background = "#FFFFFF";
    }
}
function hide(e) {
    let a = event.currentTarget.querySelector(".text");
    if(a) {
            a.style.background = "transparent";
        }
}
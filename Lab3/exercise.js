document.oncontextmenu = function (){return false};
function color1left(windows)
{
        windows.style.color = "#FFFF00";
        HEXcolors("#FFFF00");
}
function color1right(windows)
{
        windows.style.backgroundColor = "#FFFF00";
        HEXbackground("#FFFF00");
}
function color2left(windows)
{
        windows.style.color = "#FF0000";
        HEXcolors("#FF0000");
}
function color2right(windows)
{
        windows.style.backgroundColor = "#FF0000";
        HEXbackground("#FF0000");
}
function color3left(windows)
{
        windows.style.color = "#FF0066";
        HEXcolors("#FF0066");
}
function color3right(windows)
{
        windows.style.backgroundColor = "#FF0066";
        HEXbackground("#FF0066");
}
function color4left(windows)
{
        windows.style.color = "#993399";
        HEXcolors("#993399");
}
function color4right(windows)
{
        windows.style.backgroundColor = "#993399";
        HEXbackground("#993399");
}
function color5left(windows)
{
        windows.style.color = "#9933FF";
        HEXcolors("#9933FF");
}
function color5right(windows)
{
        windows.style.backgroundColor = "#9933FF";
        HEXbackground("#9933FF");
}
function color6left(windows)
{
        windows.style.color = "#330033";
        HEXcolors("#330033");
}
function color6right(windows)
{
        windows.style.backgroundColor = "#330033";
        HEXbackground("#330033");
}
function color7left(windows)
{
        windows.style.color = "#003333";
        HEXcolors("#003333");
}
function color7right(windows)
{
        windows.style.backgroundColor = "#003333";
        HEXbackground("#003333");
}
function color8left(windows)
{
        windows.style.color = "#00FFFF";
        HEXcolors("#00FFFF");
}
function color8right(windows)
{
        windows.style.backgroundColor = "#00FFFF";
        HEXbackground("#00FFFF");
}
function color9left(windows)
{
        windows.style.color = "#006633";
        HEXcolors("#006633");
}
function color9right(windows)
{
        windows.style.backgroundColor = "#006633";
        HEXbackground("#006633");
}
function color10left(windows)
{
        windows.style.color = "#00FF99";
        HEXcolors("#00FF99");
}
function color10right(windows)
{
        windows.style.backgroundColor = "#00FF99";
        HEXbackground("#00FF99");
}
function color11left(windows)
{
        windows.style.color = "#339933";
        HEXcolors("#339933");
}
function color11right(windows)
{
        windows.style.backgroundColor = "#339933";
        HEXbackground("#339933");
}
function color12left(windows)
{
        windows.style.color = "#00FF00";
        HEXcolors("#00FF00");
}
function color12right(windows)
{
        windows.style.backgroundColor = "#00FF00";
        HEXbackground("#00FF00");
}
function color13left(windows)
{
        windows.style.color = "#CCFF33";
        HEXcolors("#CCFF33");
}
function color13right(windows)
{
        windows.style.backgroundColor = "#CCFF33";
        HEXbackground("#CCFF33");
}
function color14left(windows)
{
        windows.style.color = "#333300";
        HEXcolors("#333300");
}
function color14right(windows)
{
        windows.style.backgroundColor = "#333300";
        HEXbackground("#333300");
}
function color15left(windows)
{
        windows.style.color = "#FFFFFF";
        HEXcolors("#FFFFFF");
}
function color15right(windows)
{
        windows.style.backgroundColor = "#FFFFFF";
        HEXbackground("#FFFFFF");
}
function color16left(windows)
{
        windows.style.color = "#000000";
        HEXcolors("#000000");
}
function color16right(windows)
{
        windows.style.backgroundColor = "#000000";
        HEXbackground("#000000");
}
function HEXcolors(b){ 
  document.querySelector("#colors").innerHTML = "Цвет текста в HEX: "+b;
}
function HEXbackground(b){ 
  document.querySelector("#backgrounds").innerHTML =  "Цвет фона в HEX: "+b;
}
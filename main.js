window.onload = choosePic;

var imgs = new Array("./gifs/1b1c8e6.gif","./gifs/cat_coding.gif","./gifs/cat.gif", "./gifs/lain-computer.gif");

function choosePic()
{
     var randomNo = Math.floor(Math.random() * imgs.length);
     document.getElementById("img").src = imgs[randomNo];
}
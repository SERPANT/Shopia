
imageList=document.getElementsByClassName('slider-list') [0];
bodyPart=document.getElementsByClassName('body-part') [0];
img=document.getElementsByClassName('slider-image') [0];
slide=document.getElementsByClassName('slider') [0];
currentIndex=0;

function slider()
{
    
    slide.style.height=img.clientHeight+'px';
    width=bodyPart.clientWidth;
    currentIndex=(currentIndex+1)%3;
    imageList.style.left=(currentIndex*(-1)*width-5)+'px';
}

var adjustslider=function()
{
    slide.style.height=img.clientHeight+'px';slide.style.height=img.clientHeight+'px';
}

slide.style.height=img.clientHeight+'px';

window.onresize=adjustslider;
setInterval(slider,5000);
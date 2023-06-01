//Menu
$(document).ready(function() {
    $(".menu").click(function(){
        $("nav").slideToggle();
    })
})
//slideshow
var hinh=[
    'img/10+ Amazing Places To Visit In Da Lat Vietnam.png',
    'img/Đà Lạt.jpg',
    'img/Các hòn đảo tuyệt đẹp không thể bỏ lỡ khi du lịch Vịnh Hạ Long -  RiverTour_vn.jpg',
];
var index=0;
function prev(){
    index--;
    if(index<0) index=hinh.length-1;
    document.getElementById('banner').src=hinh[index];
    document.getElementById('0').style.color='brown';
    document.getElementById('1').style.color='brown';
    document.getElementById('2').style.color='brown';
    document.getElementById(index).style.color='aqua';

}
function next(){
    index++;
    if(index=hinh.length) index=0;
    document.getElementById('banner').src=hinh[index];
    document.getElementById('0').style.color='brown';
    document.getElementById('1').style.color='brown';
    document.getElementById('2').style.color='brown';
    document.getElementById(index).style.color='aqua';

}
setInterval('next()',2000);
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

//smiley
context.fillStyle = 'LawnGreen';
context.strokeStyle = 'black';
context.lineWidth = 5;
context.beginPath();
context.arc(320, 240, 200, 0, 2 * Math.PI);
context.fill();
context.stroke();
context.closePath();

//eyes
context.fillStyle = 'cyan';
context.beginPath();
context.arc(270, 175, 30, 0, 2 * Math.PI);
context.fill();
context.stroke();
context.closePath();

context.beginPath();
context.arc(370, 175, 30, 0, 2 * Math.PI);
context.fill();
context.stroke();
context.closePath();

//mouth
context.strokeStyle = 'magenta';
context.lineWidth = 5;
context.beginPath();
context.arc(320, 240, 150, 0, -1 * Math.PI);
context.stroke();
context.closePath();


 context.font='50px Arial Black';
 context.fillText("Smile!", 230,500);
//color
var c1=document.getElementById('c1');
var c2=document.getElementById('c2');
var c3=document.getElementById('c3');
const root=document.querySelector(':root');

c1.addEventListener('click',function(){
    root.style.setProperty('--color2', '#009943');
    localStorage.setItem('pickColor','#009943');
})
c2.addEventListener('click',function(){
    root.style.setProperty('--color2', '#e2bb10');
    localStorage.setItem('pickColor','#e2bb10');
})
c3.addEventListener('click',function(){
    root.style.setProperty('--color2', '#0fe3ea');
    localStorage.setItem('pickColor','#0fe3ea');
})
function loadTheme(){
    if (localStorage.getItem('pickColor')!='') {
        root.style.setProperty('--color2', localStorage.setItem('pickColor'));
    }
}
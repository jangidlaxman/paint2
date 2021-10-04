canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color=document.getElementById("color");

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=document.getElementById("wol");
ctx.arc(200,200,100,0,document.getElementById("radius")*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("X="+mouse_x+"Y="+mouse_y);
    circle(mouse_x,mouse_y);
};
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=document.getElementById("wol");
    ctx.arc(mouse_x,mouse_y,40,0,document.getElementById("radius")*Math.PI);
    ctx.stroke();
};
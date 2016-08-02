		var sketchProc=function(processingInstance){ with (processingInstance){
		var mouseIsPressed=false;
mousePressed=function(){
mouseIsPressed=true;
};
var cord=[0,0];
size(400,400);
draw= function() {
scale(0.75,1);
for(var i=0;i<400;i++){
colorMode(RGB);
stroke(i/1.7, 255, 255);
line(0,i,400,i);
}
for(var i=0;i<400;i++){
colorMode(RGB);
stroke(0,0,0,i*2-505);
line(i,0,i,400);
stroke(255,255,255, 255-i*2);
line(i,0,i,400);
}
resetMatrix();
for(var h=0;h<400;h++){
colorMode(RGB);
if(h-10>0){
stroke(h-10);
}else{
stroke(0);
}
if(h>255){
stroke(255);
}
line(300,h,400,h);
}
colorMode(RGB);
var x=get(cord[0],cord[1]);
var r=red(x);
var g=green(x);
var b=blue(x);
var h=hue(x);
var a=alpha(x);
var s=saturation(x);
var b=brightness(x);
if(mouseIsPressed){
cord=[mouseX,mouseY];
}
stroke(0, 0, 0);
strokeWeight(2);
noFill();
rect(cord[0]-5,cord[1]-5,10,10);
strokeWeight(1);
fill(x);
var c=x.toString();
rect(0,0,20,20);
println(r+'  '+g+'  '+b);
document.forms['return'].innerHTML='RGB: '+r+', '+g+', '+b+'<br>HSB: '+round(h)+', '+s+', '+b+'<br>Example: <text id="ex" style="font-size:40px"> &#9646;</text>';
document.getElementById('ex').style.color='rgba('+r+', '+g+', '+b+', '+a+')';
mouseIsPressed=false;};


}};
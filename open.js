function updateCode(){
cWin = window.open('','cWin','location=no, menubar=no, toolbar=no, resizable=yes, scrollbars=yes');
    cWin.document.open();
	if(document.getElementById('mode').value==='Processing.JS'){
	cWin.document.write('<!DOCTYPE html><html>\
<style type="text/css">\
p {color:darkgrey;}\
</style>\
 <head>\
    <title>Scratchpad (pjs)</title>\
 </head>\
 <body style="background: white; text-align: center">\
    <canvas id="mycanvas"></canvas><br><br>\
 </body>\
 <script src="processing-1.4.1.min.js"></script>\
 <script>'+document.getElementById('processingcode').value+'</script>\
 <script type="application/javascript">\
  var canvas = document.getElementById("mycanvas");\
  var processingInstance = new Processing(canvas, sketchProc); \
 </script>\
\
</html>\
');
}else if(document.getElementById('mode').value==='Khan Academy'){
cWin.document.write('<!DOCTYPE html><html>\
<style type="text/css">\
p {color:darkgrey;}\
</style>\
 <head>\
    <title>Scratchpad (KA-mode)(javaScript)</title>\
 </head>\
 <body style="background: rgb(0,170,50); text-align: center">\
    <canvas id="mycanvas"></canvas><br><br>\
 </body>\
 <script src="processing-1.4.1.min.js"></script>\
 <script>var sketchProc=function(processingInstance){ with (processingInstance){\
size(400, 400); background(255);frameRate(30);\
var mouseIsPressed=false;angleMode="degrees";var mousePressed=function(){};var mouseReleased=function(){};'+document.getElementById('processingcode').value+'var keyIsPressed=false;\
var mousePressedPreDef=mousePressed;var mouseReleasedPreDef=mouseReleased;mousePressed=function(){mousePressedPreDef();mouseIsPressed=true;};mouseReleased=function(){mouseReleasedPreDef();mouseIsPressed=false;};\
keyPressed=function(){keyIsPressed=true;};\
keyReleased=function(){keyIsPressed=false;};}};</script>\
 <script type="application/javascript">\
  var canvas = document.getElementById("mycanvas");\
  var processingInstance = new Processing(canvas, sketchProc); \
 </script>\
\
</html>\
');
}else if(document.getElementById('mode').value==='Pure Processing'){
	cWin.document.write('<!DOCTYPE html><html>\
 <head>\
    <title>Scratchpad (pure processing)</title>\
	    <script src="processing-1.4.1.min.js"></script>\
 </head>\
 <body style="background: rgb(0,0,40); text-align: center">\
	<script src="processing-1.4.1.min.js"></script>\
<script type="text/processing" data-processing-target="processing-canvas">'+document.getElementById('processingcode').value+'</script>\
<canvas id="processing-canvas"> </canvas> </body>\
</html>\
');
}else if(document.getElementById('mode').value==='HTML5'){
	cWin.document.write(document.getElementById('processingcode').value);
}
cWin.document.close();
/*
document.forms['run'].innerHTML='<canvas id="mycanvas"></canvas><br><br>\
 <script src="processing-1.4.1.min.js"></script>\
 <script>'+document.getElementById('processingcode').value+'</script>\
 <script type="application/javascript">\
  var canvas = document.getElementById("mycanvas");\
  var processingInstance = new Processing(canvas, sketchProc);\
 </script><script>console.log(document.body.innerHTML);</script></body></html>';
 */};
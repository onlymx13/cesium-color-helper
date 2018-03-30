var add3Arrays=function(array1,array2,array3){
	var sum=new Array(array1.length);
for(var i=0;i<array1.length;i++){
	sum[i]=array1[i]+array2[i];
}
for(i=0;i<array3.length;i++){
	sum[i]=sum[i]+array3[i];
}
	return sum;
}
Array.min = function( array ){
    return Math.min.apply( Math, array );
};
var reverse=function(str) {
    return str.split("").reverse().join("");
}
const colorStrings=["BLUE","RED","BLACK","MAGENTA","GREEN","ORANGE","BROWN","NAVY","LTBLUE","YELLOW","WHITE","LTGRAY","MEDGRAY","GRAY","DARKGRAY"];
const red=[0,255,0,255,0,255,182,0,128,255,255,225,200,150,100];
const green=[0,0,0,0,221,133,47,0,255,255,255,225,200,150,100];
const blue=[255,0,0,255,0,51,47,102,255,0,255,225,200,150,100];
const colorChars=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
var main=function(){
for (var i=0;i<15;i++){
var div=document.getElementById("div"+(i+1).toString());
div.style.width="100px";
div.style.height="50px";
div.style.backgroundColor="rgb("+red[i].toString()+","+green[i].toString()+","+blue[i].toString()+")";
div.style.display="inline";
div.style.visibility="visible";
div.innerHTML=colorStrings[i];
}
var file=document.querySelector('input[type=file]').files[0];
var reader=new FileReader();
reader.addEventListener("load", function () {
var img=document.getElementById('myImage');
img.src=reader.result;
  }, false);
if (file) {
    reader.readAsDataURL(file);
  }
var outputString="";
//var img = document.getElementById('myImage');
var redDiffs=new Array(256);
var greenDiffs=new Array(256);
var blueDiffs=new Array(256);
var mycanvas = document.getElementById('mycanvas');
mycanvas.width = img.width;
mycanvas.height = img.height
var context = mycanvas.getContext('2d');
context.drawImage(img, 0, 0, img.width, img.height);
//Read each pixel and make that an array
//Pixel1=[r1,g1,b1,a1]...
for(var xInPic=1;xInPic<=16;xInPic++){
	for(var yInPic=1;yInPic<=16;yInPic++){
		var pixelData = context.getImageData(xInPic, yInPic, 1, 1).data;
		//Now do red-r1:
		var redDiffs=red.map(x => Math.abs(x-pixelData[0]));
		var greenDiffs=green.map(x => Math.abs(x-pixelData[1]));
		var blueDiffs=blue.map(x => Math.abs(x-pixelData[2]));
		var totalDiffs=add3Arrays(redDiffs,greenDiffs,blueDiffs);
		outputString=outputString+colorChars[totalDiffs.indexOf(Math.min(...totalDiffs))];
		
}	}
var outputArray=outputString.match(/.{1,16}/g).reverse();
var rotateArray=function(array){
var newOutputArray=new Array(16);
var substr=function(str,pos){
return str.match(/./g)[pos];	
}
for(var i=0;i<16;i++){
	newOutputArray[i]=substr(array[0],i)+substr(array[1],i)+substr(array[2],i)+substr(array[3],i)+substr(array[4],i)+substr(array[5],i)+substr(array[6],i)+substr(array[7],i)+substr(array[8],i)+substr(array[9],i)+substr(array[10],i)+substr(array[11],i)+substr(array[12],i)+substr(array[13],i)+substr(array[14],i)+substr(array[15],i);
}
return newOutputArray;
}
var reverseArray=function(array){
return [reverse(array[0]),reverse(array[1]),reverse(array[2]),reverse(array[3]),reverse(array[4]),reverse(array[5]),reverse(array[6]),reverse(array[7]),reverse(array[8]),reverse(array[9]),reverse(array[10]),reverse(array[11]),reverse(array[12]),reverse(array[13]),reverse(array[14]),reverse(array[15])];
}
document.getElementById("output").innerHTML=(reverseArray(rotateArray(outputArray))).join("");
}

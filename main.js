var main=function(){
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
var colorStrings=["BLUE","RED","BLACK","MAGENTA","GREEN","ORANGE","BROWN","NAVY","LTBLUE","YELLOW","WHITE","LTGRAY","MEDGRAY","GRAY","DARKGRAY"];
var colorChars=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
for (var i=0;i<16;i++){
var div=document.createElement("div");
div.width=100;
div.height=50;
div.backgroundColor=rgb(red[i],green[i],blue[i]);
div.innerHTML=colorStrings[i];
}
var outputString="";
var red=[0,255,0,255,0,255,128,0,128,255,255,200,150,50,50];
var green=[0,0,0,0,255,99,33,0,255,255,255,200,150,0,50];
var blue=[255,0,0,255,0,0,33,50,255,0,255,200,150,50,50];
var img = document.getElementById('myImage');
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

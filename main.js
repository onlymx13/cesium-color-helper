var main=function(){
var add3Arrays=function(array1,array2,array3){
	if(array1.length+array2.length+array3.length!=3*array1.length){
	return null;
	}
	var sum=new Array(array1.length);
for(var i=0;i<array1.length;i++){
	sum[i]=array1[i]+array2[i];
}
for(i=0;i<array3.length;i++){
	sum[i]=sum[i]+array3[i];
}
}
Array.min = function( array ){
    return Math.min.apply( Math, array );
};
var colorStrings=["BLUE","RED","BLACK","MAGENTA","GREEN","ORANGE","BROWN","NAVY","LTBLUE","YELLOW","WHITE","LTGRAY","MEDGRAY","GRAY","DARKGRAY"];
var colorChars=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
var outputString="";
var red=[0,255,0,255,0,255,128,0,128,255,255,200,150,100,50];
var green=[0,0,0,0,255,99,33,0,255,255,255,200,150,100,50];
var blue=[255,0,0,255,0,0,33,50,255,255,255,200,150,100,50];
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
		//Now do red-ri:
		var redDiffs=red.map(x => Math.abs(x-pixelData[0]));
		var greenDiffs=green.map(x => Math.abs(x-pixelData[1]));
		var blueDiffs=blue.map(x => Math.abs(x-pixelData[2]));
		var totalDiffs=add3Arrays(redDiffs,greenDiffs,blueDiffs);
		outputString=outputString+colorChars[totalDiffs.indexOf(totalDiffs.min)];
		
}	}
document.getElementById("output").innerHTML=outputString;
}

var colorStrings=["BLUE","RED","BLACK","MAGENTA","GREEN","ORANGE","BROWN","NAVY","LTBLUE","YELLOW","WHITE","LTGRAY","MEDGRAY","GRAY","DARKGRAY"];
var red=[0,255,0,255,0,255,128,0,128,255,255,200,150,100,50];
var img = document.getElementById('myImage');

var img = document.createElement('img');
    img.setAttribute('crossOrigin', '');
    img.setAttribute('src', 'img.png')
    img.addEventListener('load', () => {
        var vibrant = new Vibrant(img);
        var swatches = vibrant.swatches()
        for (var swatch in swatches)
            if (swatches.hasOwnProperty(swatch) && swatches[swatch])
                this.colorPalette.push({hex: swatches[swatch].getHex()})
    });
	
img.onload = function() {
	var redDiffs=[];
  var mycanvas = document.getElementById('mycanvas');
  mycanvas.width = img.width;
  mycanvas.height = img.height;
  var context = mycanvas.getContext('2d');
  context.drawImage(img, 0, 0, img.width, img.height);
  for(var x=1;x<=16;x++){
    for(var y=1;y<=16;y++){
      var pixelData = context.getImageData(x, y, 1, 1).data;
      console.log("x="+x.toString()+" y="+y.toString()+" pD="+pixelData.toString());
	  redDiffs[16x+y-16]=red.map( function(value){
		  return value-pixelData[0];
	  });
    }
  }
}

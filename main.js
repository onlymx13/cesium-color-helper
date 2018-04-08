var imageData;
var i;
var outputCanvas;
var red;
var green;
var blue;
var fileTransferred;
var image = new Image();

function mainBody() {
    var img = document.getElementById('myImage');
    img.onload = function() {
        var outputString = "";
        var redDiffs = new Array(256);
        var greenDiffs = new Array(256);
        var blueDiffs = new Array(256);
        var mycanvas = document.getElementById('mycanvas');
        mycanvas.width = img.width;
        mycanvas.height = img.height;
        var context = mycanvas.getContext('2d');
        context.drawImage(img, 0, 0, img.width, img.height);
        //Read each pixel and make that an array
        //Pixel1=[r1,g1,b1,a1]...
        for (var xInPic = 0; xInPic < 16; xInPic++) {
            for (var yInPic = 0; yInPic < 16; yInPic++) {
                var pixelData = context.getImageData(xInPic, yInPic, 1, 1).data;
                //Now do red-r1:
                var redDiffs = red.map(x => Math.abs(x - pixelData[0]));
                var greenDiffs = green.map(x => Math.abs(x - pixelData[1]));
                var blueDiffs = blue.map(x => Math.abs(x - pixelData[2]));
                var totalDiffs = add3Arrays(redDiffs, greenDiffs, blueDiffs);
                outputString = outputString + colorChars[totalDiffs.indexOf(Math.min(...totalDiffs))];

            }
        }
        var outputArray = outputString.match(/.{1,16}/g).reverse();
        var output = (reverseArray(rotateArray(outputArray))).join("");
        document.getElementById("output").innerHTML = ':DCS<br>"' + output;
        outputCanvas = document.getElementById('outputcanvas');
        ctx = outputCanvas.getContext('2d');
        imageData = ctx.createImageData(16, 16);
        var sub;
        var theData = ctx.createImageData(1, 1);
        for (yInPic = 1; yInPic <= 16; yInPic++) {
            for (xInPic = 1; xInPic <= 16; xInPic++) {
                sub = output.substring(16 * yInPic + xInPic - 17, 16 * yInPic + xInPic - 16);
                theData.data[0] = red[colorChars.indexOf(sub)];
                theData.data[1] = green[colorChars.indexOf(sub)];
                theData.data[2] = blue[colorChars.indexOf(sub)];
                theData.data[3] = 255;
                ctx.putImageData(theData, xInPic, yInPic);
            }
        }
    }

    function dropHandler(ev) {
        ev.preventDefault();
        fileTransferred = ev.dataTransfer.files[0];
        image.src = window.URL.createObjectURL(fileTransferred);
        mainBody();
        ev.dataTransfer.items.clear();
        ev.dataTransfer.clearData();
        window.URL.revokeObjectURL(image.src);
    }

    function dragOverHandler(ev) {
        ev.preventDefault();
    }
    var add3Arrays = function(array1, array2, array3) {
        var sum = new Array(array1.length);
        for (i = 0; i < array1.length; i++) {
            sum[i] = array1[i] + array2[i];
        }
        for (i = 0; i < array3.length; i++) {
            sum[i] = sum[i] + array3[i];
        }
        return sum;
    }
    Array.min = function(array) {
        return Math.min.apply(Math, array);
    };
    var reverse = function(str) {
        return str.split("").reverse().join("");
    }
    var colorStrings = ["WHITE", "BLUE", "RED", "BLACK", "MAGENTA", "GREEN", "ORANGE", "BROWN", "NAVY", "LTBLUE", "YELLOW", "WHITE", "LTGRAY", "MEDGRAY", "GRAY", "DARKGRAY", "G", "BLACK(H)", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "θ", "+", "-", "*", "/", ".", ",", "!", "'", ":", "(", ")"];
    red = [255, 24, 231, 0, 255, 33, 231, 99, 8, 16, 231, 255, 225, 181, 107, 107, 74, 0, 0, 214, 181, 41, 57, 41, 156, 198, 214, 41, 206, 49, 156, 214, 33, 33, 33, 0, 198, 255, 0, 255, 49, 231, 99, 148, 33, 107, 156, 214];
    green = [255, 0, 24, 0, 24, 130, 121, 40, 32, 97, 219, 251, 225, 178, 105, 73, 73, 0, 162, 24, 243, 0, 32, 65, 178, 186, 24, 97, 186, 32, 243, 24, 97, 97, 97, 32, 121, 219, 130, 251, 65, 219, 73, 48, 0, 73, 211, 24];
    blue = [255, 198, 0, 0, 198, 33, 24, 8, 74, 156, 49, 255, 225, 173, 90, 82, 82, 0, 41, 132, 189, 66, 206, 82, 239, 41, 132, 90, 107, 140, 255, 132, 24, 24, 24, 8, 24, 247, 133, 255, 148, 49, 16, 140, 0, 82, 247, 132];
    var colorChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "θ", "+", "-", "*", "/", ".", ",", "!", "'", ":", "(", ")"];
    var reverseArray = function(array) {
        return [reverse(array[0]), reverse(array[1]), reverse(array[2]), reverse(array[3]), reverse(array[4]), reverse(array[5]), reverse(array[6]), reverse(array[7]), reverse(array[8]), reverse(array[9]), reverse(array[10]), reverse(array[11]), reverse(array[12]), reverse(array[13]), reverse(array[14]), reverse(array[15])];
    }
    var rotateArray = function(array) {
        var newOutputArray = new Array(16);
        var substr = function(str, pos) {
            return str.match(/./g)[pos];
        }
        for (i = 0; i < 16; i++) {
            newOutputArray[i] = substr(array[0], i) + substr(array[1], i) + substr(array[2], i) + substr(array[3], i) + substr(array[4], i) + substr(array[5], i) + substr(array[6], i) + substr(array[7], i) + substr(array[8], i) + substr(array[9], i) + substr(array[10], i) + substr(array[11], i) + substr(array[12], i) + substr(array[13], i) + substr(array[14], i) + substr(array[15], i);
        }
        return newOutputArray;
    }
    var setup = function() {
        var div;
        for (i = 0; i < colorChars.length; i++) {
            div = document.createElement('div');
            div.style.width = "100px";
            div.style.height = "50px";
            div.style.backgroundColor = "rgb(" + red[i].toString() + "," + green[i].toString() + "," + blue[i].toString() + ")";
            div.style.display = "inline";
            div.style.visibility = "visible";
            var node = document.createTextNode(colorStrings[i]);
            div.appendChild(node);
            document.body.insertBefore(div, document.getElementById('wrapper'));
        }
    }
    var main = function() {
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        reader.addEventListener("load", function() {
            img.src = reader.result;
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
        mainBody();
    }
}

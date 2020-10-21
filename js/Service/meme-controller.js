'use strict';

var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    var imageObj = new Image();
    // console.log('The context:', gCtx);
    // drawImg()
    // console.log(gMeme.lines[0].txt);
    // drawText(gMeme.lines[0].txt, 250, 200)

    imageObj.onload = function () {
        gCtx.drawImage(imageObj, 0, 0);
        gCtx.font = "40pt Calibri";
        gCtx.strokeStyle = 'red'
        gCtx.fillStyle = 'white'
        gCtx.fillText(gMeme.lines[0].txt, 50, 50);
        gCtx.fillText('new line', 100, 100);

    };
    imageObj.src = gImgs[0].url


}

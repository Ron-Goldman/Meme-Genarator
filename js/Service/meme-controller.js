'use strict';

var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg()
}

function onAddText() {
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');

    var text = document.getElementById('text').value

    addTextToMeme(text);
    document.getElementById('text').value = ''
}

//adds img from to gallery to canvas
function onAddImgToMeme(id){
    gCurrImg = id-1
    drawImg()
}

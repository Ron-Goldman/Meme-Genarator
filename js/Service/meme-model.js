'use strict';

var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: 'images/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'images/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'images/3.jpg', keywords: ['happy'] }

];
var gCurrImg = 0;
var gCurrTextIdx = 0
var gFontSize = 50;
//current meme object
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: '[meme here]',
        size: gFontSize,
        align: 'left',
        color: 'red',
        x: 75,
        y: 450
    }]
}

function createGallery() {

}

//add user text to gMeme

function addTextToGmeme(text) {
    gMeme.lines.unshift({
        txt: text,
        size: 30,
        align: 'left',
        color: 'red',
        x: 100,
        y: 200
    })
}

function renderCanvas() {
    var img = new Image()
    img.src = gImgs[gCurrImg].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        gMeme.lines.forEach(function (line) {
            drawText(line.txt, line.x, line.y, line.size)
        }
        )
    }
}

function addTextToMeme(text) {
    drawText(text, gMeme.lines[gCurrTextIdx].x, gMeme.lines[gCurrTextIdx].y, gMeme.lines[gCurrTextIdx].size)
}

function moveText(diff) {
    gMeme.lines[gCurrTextIdx].y += diff
    var img = new Image()
    img.src = gImgs[gCurrImg].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)

        renderCanvas()

    }
}

function changeFontSize() {
    gMeme.lines[gCurrTextIdx].size = gFontSize
    var img = new Image()
    img.src = gImgs[gCurrImg].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        renderCanvas()
    }
    // console.log(gMeme.lines[gCurrTextIdx].txt);
}
//creates text

function drawText(text, x, y, size) {
    gCtx.font = `${size}pt IMPACT`;
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    console.log('text', gCtx.measureText(text).width);
    gCtx.fillText(text, x, y);
}


function drawImg() {
    var img = new Image()
    img.src = gImgs[gCurrImg].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}

function clearCanvas() {
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    drawImg()
}

function focusText(){

    // drawRect(gMeme.lines[gCurrTextIdx].x, gMeme.lines[gCurrTextIdx].y, gMeme.lines[gCurrTextIdx].size)
}

function drawRect(x, y,size) {
    gCtx.beginPath()
    gCtx.rect(x, y, size, size)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()
}
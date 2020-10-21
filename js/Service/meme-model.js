'use strict';

var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: 'images/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'images/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'images/3.jpg', keywords: ['happy'] }

];
var gCurrImg = 0

//current meme object
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'First line',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function createGallery(){

}

//add user text to gMeme

function addTextToMeme(text) {
    gMeme.lines.push({
        txt: text,
        size: 20,
        align: 'left',
        color: 'red'
    })

    drawText(text,50,50)
}

//creates text

function drawText(text, x, y) {
    gCtx.font = "40pt IMPACT";
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.fillText(text, x, y);
}


function drawImg() {
    var img = new Image()
    img.src = gImgs[gCurrImg].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}
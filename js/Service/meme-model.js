'use strict';

var gKeywords = {'happy': 12,'funny puk': 1}
var gImgs = [
    {id: 1, url: 'images/1.jpg', keywords: ['happy']}
];

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

function drawImg() {
    var img = new Image()
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
    img.src = gImgs[0].url;
}

function drawText(text, x, y) {
    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'white'
    gCtx.lineWidth = '2'
    gCtx.font = '48px Ariel'
    gCtx.textAlign = 'start'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}
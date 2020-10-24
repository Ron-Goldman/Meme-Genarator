'use strict';

var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: 'images/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'images/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'images/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'images/4.jpg', keywords: ['happy'] },
    { id: 5, url: 'images/5.jpg', keywords: ['happy'] },
    { id: 6, url: 'images/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'images/7.jpg', keywords: ['happy'] },
    { id: 8, url: 'images/8.jpg', keywords: ['happy'] },
    { id: 9, url: 'images/9.jpg', keywords: ['happy'] },
    { id: 10, url: 'images/10.jpg', keywords: ['happy'] },
    { id: 11, url: 'images/11.jpg', keywords: ['happy'] },
    { id: 12, url: 'images/12.jpg', keywords: ['happy'] },
    { id: 13, url: 'images/13.jpg', keywords: ['happy'] },
    { id: 14, url: 'images/14.jpg', keywords: ['happy'] },
    { id: 15, url: 'images/15.jpg', keywords: ['happy'] },
    { id: 16, url: 'images/16.jpg', keywords: ['happy'] },
    { id: 17, url: 'images/17.jpg', keywords: ['happy'] },
    { id: 18, url: 'images/18.jpg', keywords: ['happy'] }


];
var gCurrImg = 0;
var gCurrTextIdx = 0
var gFontSize = 50;
var IDgen = 0
//current meme object
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: []
}

function createGallery() {
    var strHTML = ''
    for (var i = 1; i <= 18; i++) {
        strHTML += `<div><img onclick="onAddImgToMeme(${i})" src="images/${i}.jpg" alt=""></div>`
    }

    document.querySelector('.gallery-container').innerHTML = strHTML;
}

//add user text to gMeme

function addTextToGmeme(text) {
    gMeme.lines.unshift({
        id: 0 + IDgen,
        txt: text,
        size: 30,
        align: 'left',
        color: '#ff0080',
        stroke: 'black',
        x: 100,
        y: 100
    })
}

function renderCanvas() {
    var img = new Image()
    img.src = gImgs[gCurrImg].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        gMeme.lines.forEach(function (line) {
            drawText(line.txt, line.x, line.y, line.size, line.color , line.stroke)
        }
        )
    }
}

function addTextToMeme(text) {
    drawText(text, gMeme.lines[gCurrTextIdx].x, gMeme.lines[gCurrTextIdx].y, gMeme.lines[gCurrTextIdx].size, gMeme.lines[gCurrTextIdx].align)

}

function moveText(diffY, diffX) {
    gMeme.lines[gCurrTextIdx].y += diffY
    gMeme.lines[gCurrTextIdx].x += diffX
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

function drawText(text, x, y, size, color,line) {
    gCtx.font = `${size}pt IMPACT`;
    gCtx.lineWidth = 3
    gCtx.strokeStyle = `${line}`
    gCtx.strokeText(text, x, y)
    // gCtx.textAlign = `${align}`;
    gCtx.fillStyle = `${color}`
    console.log('text', gCtx.measureText(text).width);
    gCtx.fillText(text, x, y);
}

function setFillColor() {
    gMeme.lines[gCurrTextIdx].color = document.querySelector('.fill-color').value
    renderCanvas()
}

function setstrokeColor() {
    gMeme.lines[gCurrTextIdx].stroke = document.querySelector('.stroke-color').value
    renderCanvas()
}

function saveMeme(){
    let canvasImage = document.getElementById('meme-canvas').toDataURL('image/png');

    // this can be used to download any image from webpage to local disk
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function () {
        let a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = 'image_name.jpg';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        a.remove()
      };
      xhr.open('GET', canvasImage); // This is to download the canvas Image
      xhr.send();

}

function drawImg(id) {
    var img = new Image()
    img.src = gImgs[id - 1].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
    // gCurrImg = id ;
}

function clearCanvas() {
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    drawImg(gCurrImg + 1)
    gMeme.lines = []
}

function focusText() {
    if (gCurrTextIdx = gMeme.lines[gCurrTextIdx].id) {
        drawRect(gMeme.lines[gCurrTextIdx].x, gMeme.lines[gCurrTextIdx].y - gMeme.lines[gCurrTextIdx].size, gCtx.measureText(gMeme.lines[gCurrTextIdx].txt).width, gMeme.lines[gCurrTextIdx].size)

        // drawRect(gMeme.lines[gCurrTextIdx].x, gMeme.lines[gCurrTextIdx].y, gMeme.lines[gCurrTextIdx].size)
    }
}

function removeTextFromMeme() {
    gMeme.lines.splice(gCurrTextIdx, 1)
    var img = new Image()
    img.src = gImgs[gCurrImg].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        renderCanvas()
    }
}

function drawRect(x, y, width, size) {
    gCtx.beginPath()
    gCtx.lineWidth = '6'
    gCtx.rect(x, y, width, size)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()
}

function uploadImg(elForm, ev) {
    ev.preventDefault();
    document.getElementById('imgData').value = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
        Share on Facebook 
        </a>`
    }

    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);
    fetch('http://ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
    .then(function (res) {
        return res.text()
    })
    .then(onSuccess)
    .catch(function (err) {
        console.error(err)
    })
}


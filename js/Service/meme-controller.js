'use strict';

var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg()
    renderCanvas()
}

function onAddText() {
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');

    var text = document.getElementById('text').value

    addTextToMeme(text);
    document.getElementById('text').value = ''
    if (gCurrTextIdx !== 0) gCurrTextIdx++

    addTextToGmeme(text)
}

//adds img from to gallery to canvas
function onAddImgToMeme(id){
    gCurrImg = id-1
    drawImg()
    document.querySelector('.meme-editor').style.display = 'flex'
    renderCanvas()
}

function onFontChange(diff){
    gFontSize += diff;
    document.querySelector('.font-size').innerText = gFontSize;
    changeFontSize()
}

function onMoveText(diff){
    moveText(diff)

}

function onFocusText(){
     (gMeme.lines.length <= gCurrTextIdx) ? gCurrTextIdx = 0 : gCurrTextIdx++
    console.log(gMeme.lines[gCurrTextIdx]);
    focusText()
}

function draw(ev){
    console.log('X : ',ev.offsetX);
    console.log('Y : ',ev.offsetY);

}

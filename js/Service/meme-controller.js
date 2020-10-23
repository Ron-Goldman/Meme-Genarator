'use strict';

var gCanvas;
var gCtx;

function onInit() {
    createGallery()
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg()
    renderCanvas()
    drawRect(100,100,40,40)
}

function onAddText() {
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');

    var text = document.getElementById('text').value
    IDgen++
    addTextToGmeme(text)

    addTextToMeme(text);
    document.getElementById('text').value = ''
    document.querySelector('.currText').innerText = gMeme.lines[gCurrTextIdx].txt
    if (gCurrTextIdx !== 0) gCurrTextIdx++

}

//adds img from to gallery to canvas
function onAddImgToMeme(id){
    gCurrImg = id-1
    drawImg(id)
    document.querySelector('.meme-editor').style.display = 'flex'
    document.querySelector('.main-gallery').style.display = 'none'
    document.querySelector('.character-container').style.display = 'none'
    document.querySelector('.search-bar').style.display = 'none'



    renderCanvas()
}

function onHomePage() {
    document.querySelector('.meme-editor').style.display = 'none'
    document.querySelector('.main-gallery').style.display = ''
    document.querySelector('.character-container').style.display = ''
    document.querySelector('.search-bar').style.display = ''
}

function onFontChange(diff){
    gFontSize += diff;
    document.querySelector('.font-size').innerText = gFontSize;
    changeFontSize()
}

function onMoveText(diffY,diffX){
    moveText(diffY,diffX)

}

function onFocusText(){
  
     (gMeme.lines.length <= gCurrTextIdx) ? gCurrTextIdx = 0 : gCurrTextIdx++
    console.log(gMeme.lines[gCurrTextIdx]);
    // focusText()
    if (gMeme.lines[gCurrTextIdx] === undefined) document.querySelector('.currText').innerText = ''
    document.querySelector('.currText').innerText = gMeme.lines[gCurrTextIdx].txt
}

function draw(ev){
    console.log('X : ',ev.offsetX);
    console.log('Y : ',ev.offsetY);

}

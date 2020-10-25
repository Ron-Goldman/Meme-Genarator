'use strict';

var gCanvas;
var gCtx;

function onInit() {
    createGallery()
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    if (window.innerWidth < 700) resizeCanvas()
    renderCanvas()
}

function onAddText() {
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    const text = document.getElementById('text').value
    gNextId++
    addTextToGmeme(text)
    addTextToMeme(text);
    document.getElementById('text').value = ''
    document.querySelector('.currText').innerText = gMeme.lines[gCurrTextIdx].txt
    if (gCurrTextIdx !== 0) gCurrTextIdx++
}

//adds img from to gallery to canvas
function onAddImgToMeme(id) {
    gCurrImg = id - 1
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

function onFontChange(diff) {
    gFontSize += diff;
    document.querySelector('.font-size').innerText = gFontSize;
    changeFontSize()
}

function onMoveText(diffY, diffX) {
    moveText(diffY, diffX)
}

function onFocusText() {
    const meme = getMeme();
    // const currLine = getCurrLine()
    (meme.lines.length <= gCurrTextIdx) ? gCurrTextIdx = 0 : gCurrTextIdx++
    console.log(gMeme.lines[gCurrTextIdx]);
    // focusText()
    if (gMeme.lines[gCurrTextIdx] === undefined) document.querySelector('.currText').innerText = ''
    document.querySelector('.currText').innerText = gMeme.lines[gCurrTextIdx].txt
}

function onRemoveTextFromMeme() {
    removeTextFromMeme()
    document.querySelector('.currText').innerText = ''

}

function onSearchMemeByKeyword(keyword) {
    var currKeyword = (keyword) ? keyword : document.querySelector('.search').value
    searchMemeBykeywords(currKeyword)
    getImgsToDisplay(currKeyword)
    console.log(gKeywords[keyword]);
    document.querySelector(`.${keyword}`).style.fontSize = `${gKeywords[keyword]+16}px`;
}

function autofillkeywords(){
    document.querySelector('.search').addEventListener('input',onSearchMemeByKeyword())
}

function draw(ev) {
    console.log('X : ', ev.offsetX);
    console.log('Y : ', ev.offsetY);

}
function toggleMenu() {
    var mainMenu = document.getElementById('mainMenu');
    console.log(mainMenu);
    mainMenu.classList.toggle('open');
}


function resizeCanvas() {
    gCanvas.width = 300;
    gCanvas.height = 300;

    // Redraw everything after resizing the window
    renderCanvas();
}

function getCurrLine() {
    return gMeme.lines[gCurrTextIdx]
}

function getMeme() {
    return gMeme;
}



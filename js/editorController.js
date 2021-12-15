'use strict'
var gElCanvas;
var gCtx;

function init() {
    console.log('starting...');
    document.querySelector('.editor').classList.add('none');
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}


function renderMeme(img) {
    console.log('img', img);
    document.querySelector('.gallery').classList.add('none');
    document.querySelector('.editor').classList.remove('none');
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
}
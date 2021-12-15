'use strict'
var gElCanvas;
var gCtx;

function init() {
    console.log('starting...');
    document.querySelector('.editor').classList.add('hidden');
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    // resizeCanvas()
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}


function renderMeme() {
    var meme = getMeme();
    var elImg = document.querySelector(`.img-${meme.selectedImgId}`);
    document.querySelector('.gallery').classList.add('hidden');
    document.querySelector('.editor').classList.remove('hidden');

    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
    drawTxt()
}

function drawTxt() {
    const memes = getMeme();
    memes.lines.forEach(line => {
        var text = line.txt;
        gCtx.textBaseline = 'middle';
        gCtx.textAlign = line.align;
        const fontSize = line.size;
        gCtx.font = `${fontSize}px impact`;
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = `${line.colorStroke}`;
        gCtx.fillStyle = `${line.colorFill}`;
        gCtx.fillText(text, gElCanvas.width / 2, line.y);
        gCtx.strokeText(text, gElCanvas.width / 2, line.y);
    })
}

function onSetLine() {
    setLineNum()
}


function onSetLineTxt(elInput) {
    var text = elInput.value
    setLineTxt(text);
    renderMeme()

}

function onSubmitForm(ev) {
    ev.preventDefault();

}

function onChangeFontSize(diff) {
    changeFontSize(diff);
    renderMeme()
}

function onSetFillColor(color) {
    setFillColor(color.value)
    renderMeme();
}

function onSetStrokeColor(color) {
    setStrokeColor(color.value)
    renderMeme();
}

function onChangeY(diff) {
    changeY(diff);
    renderMeme();
}
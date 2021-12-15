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
    // memes.lines.forEach(line => {
    // if (line.selectedLineIdx === 0) y = 50
    // else if ((line.selectedLineIdx === 1)) y = gElCanvas.height - 50
    // else y = 50 + 30 * line.selectedLineIdx;
    var text = memes.lines[memes.selectedLineIdx].txt;
    console.log('text', text);
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = memes.lines[memes.selectedLineIdx].align;
    const fontSize = memes.lines[memes.selectedLineIdx].size;
    gCtx.font = `${fontSize}px impact`;
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = memes.lines[memes.selectedLineIdx].colorStroke;
    gCtx.fillStyle = `${memes.lines[memes.selectedLineIdx].colorFill}`;
    console.log(' gCtx.fillStyle', gCtx.fillStyle);
    console.log(' gCtx.strokeStyle', gCtx.strokeStyle);
    gCtx.fillText(text, gElCanvas.width / 2, 50);
    gCtx.strokeText(text, gElCanvas.width / 2, 50);
    // })
}

function onSetLine() {
    setLineNum()
}


function onSetLineTxt(elInput) {
    console.log('elInput.value', elInput.value);
    var text = elInput.value
    console.log('text', text);
    setLineTxt(text);
    drawTxt();
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
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
}

function drawTxt(txt, x, y) {
    const memes = getMeme();
    // memes.lines.forEach(line => {
        // if (line.selectedLineIdx === 0) y = 50
        // else if ((line.selectedLineIdx === 1)) y = gElCanvas.height - 50
        // else y = 50 + 30 * line.selectedLineIdx;
        // txt = line.txt;
        gCtx.textBaseline = 'middle';
        console.log('memes.lines[0].align', memes.lines[0].align);
        // gCtx.textAlign = line.align;
        const fontSize = 30;
        // const fontSize = line.size;
        gCtx.font = `${fontSize}px impact`;
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = 'black';
        gCtx.fillStyle = 'white';
        gCtx.fillText(txt, x, y);
        gCtx.strokeText(txt, x, y);
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
    drawTxt(text, gElCanvas.width / 2, 50);
}

function onSubmitForm(ev) {
    ev.preventDefault();

}

function changeFontSize(diff) {

}
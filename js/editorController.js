'use strict'
var gElCanvas;
var gCtx;

function init() {
    document.querySelector('.editor').classList.add('hidden');
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    // resizeCanvas()
}

function getCanvasHeight() {
    return gElCanvas.height;
}

function getCanvasWidth() {
    return gElCanvas.width;
}

function resizeCanvas() {
    var elContainer = document.querySelector('#my-canvas')
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
        gCtx.fillText(text, line.x, line.y);
        gCtx.strokeText(text, line.x, line.y);
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

function onSwitchLine() {
    switchLine()
    //  clearCanvas();
    // renderMeme()
    // drawRect();
}

function onDeleteLine() {
    deleteLine();
    renderMeme();
}

// function drawRect() {
//     const memes = getMeme();
//     var currLine = memes.selectedLineIdx
//     // console.log('memes.lines[currLine].active', memes.lines[currLine].active);
//     // if (!memes.lines[currLine].active) return
//     var startHeight = memes.lines[currLine].y - memes.lines[currLine].size / 2
//     var endHeight = startHeight + memes.lines[currLine].size / 2
//     console.log('currLine', currLine);
//     console.log('startHeight', startHeight);
//     console.log('endHeight', endHeight);
//     gCtx.rect(0, startHeight, gElCanvas.width, endHeight);
//     gCtx.strokeStyle = '#1b1b1b';
//     gCtx.stroke();
// }



function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

function onSetAlign(alignment) {
    setAlign(alignment)
    renderMeme();

}

function downloadCanvas(elLink) {

    var imgContent = gElCanvas.toDataURL('image/png')
    elLink.href = imgContent
}
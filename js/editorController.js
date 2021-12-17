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
    document.querySelector('.about').classList.add('hidden');
    document.querySelector('.memes').classList.add('hidden');
    document.querySelector('.editor').classList.remove('hidden');
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
    drawTxt()
    drawRect()
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
    renderMeme();
}

function onDeleteLine() {
    deleteLine();
    renderMeme();
}

function drawRect() {
    const memes = getMeme();
    const foundLine = memes.lines.find((line, idx) => {
        return idx === memes.selectedLineIdx
    })
    var textWidth = gCtx.measureText(foundLine.txt).width
    var startWidth = foundLine.x - textWidth / 2
    var endWidth = textWidth
    var gradient = gCtx.createLinearGradient(0, 0, gElCanvas.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    var startHeight = foundLine.y - 20
    var endHeight = 40
    gCtx.strokeStyle = gradient;
    gCtx.beginPath();
    gCtx.rect(startWidth, startHeight, endWidth, endHeight);
    gCtx.stroke();
    gCtx.closePath();
}



function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

function onSetAlign(alignment) {
    setAlign(alignment)
    renderMeme();
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-canvas.jpg'
}


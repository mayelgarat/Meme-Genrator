'use strict'
var gElSavedCanvas;
var ctx;
var gMemesStorage = [];

function goToMemes() {
    document.querySelector('.gallery').classList.add('hidden');
    document.querySelector('.about').classList.add('hidden');
    document.querySelector('.editor').classList.add('hidden');
    document.querySelector('.memes').classList.remove('hidden');
    renderMemeStorage()
    renderSavedImgs()
}

function renderMemeStorage() {
    gMemesStorage = getSavedMemes()
    if (!gMemesStorage) return
    const strHtml = gMemesStorage.map(meme => {
        return `<canvas id="canvas-${meme.selectedImgId}" height="225" width="225">
</canvas>`
    })
    document.querySelector('.grid-container-storage').innerHTML = strHtml.join('')
}


function renderSavedImgs() {
    if (gMemesStorage.length === 0) return
    gMemesStorage.forEach((meme) => {
        gElSavedCanvas = document.getElementById(`canvas-${meme.selectedImgId}`)
        ctx = gElSavedCanvas.getContext('2d')
        var img = document.querySelector(`.img-${meme.selectedImgId}`);
        ctx.drawImage(img, 0, 0, gElSavedCanvas.width, gElSavedCanvas.height);
        drawTxtStorage()
    })
}


function drawTxtStorage() {
    gMemesStorage.forEach((meme) => {
        gElSavedCanvas = document.getElementById(`canvas-${meme.selectedImgId}`)
        ctx = gElSavedCanvas.getContext('2d')
        meme.lines.map(line => {
            var text = line.txt;
            const fontSize = line.size / 2;
            ctx.font = `${fontSize}px impact`;
            ctx.lineWidth = 2;
            ctx.strokeStyle = `${line.colorStroke}`;
            ctx.fillStyle = `${line.colorFill}`;
            ctx.fillText(text, line.x / 2- ctx.measureText(text).width/2 , line.y / 2);
            ctx.strokeText(text, line.x / 2 - ctx.measureText(text).width/2, line.y / 2);
        })
    })
}

function onSave() {
    save();
}
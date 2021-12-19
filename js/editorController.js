'use strict'
var gClickedLine = null;
var gElCanvas;
var gCtx;
var gStartPos;
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

function init() {
    document.querySelector('.gallery').classList.add('hidden');
    document.querySelector('.about').classList.add('hidden');
    document.querySelector('.memes').classList.add('hidden');
    document.querySelector('.editor').classList.remove('hidden');
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    renderMeme()
    share()
    addListeners()
}

function getCanvasHeight() {
    return gElCanvas.height;
}

function getCanvasWidth() {
    return gElCanvas.width;
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        // const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
        renderMeme()
    })
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function renderMeme() {
    var meme = getMeme();
    var elImg = document.querySelector(`.img-${meme.selectedImgId}`);
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

function onAddLine() {
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

function canvasClicked(ev) {
    var memes = getMeme();
    gClickedLine = null
    gClickedLine = memes.lines.findIndex(line => {
        return ev.offsetX >= line.x - gCtx.measureText(line.txt).width && ev.offsetX <= line.x + gCtx.measureText(line.txt).width &&
            ev.offsetY >= line.y - 30 && ev.offsetY <= line.y + 30
    })
    if (gClickedLine || gClickedLine === 0) {
        setClickedLine(gClickedLine)
        renderMeme()
    }
}

function share() {
    const imgDataUrl = gElCanvas.toDataURL('image/png');
    const shareData = {
        title: 'Canvas',
        text: 'Share Your Meme!',
        url: imgDataUrl
    }
    const btn = document.querySelector('div .share');
    const resultPara = document.querySelector('.result');
    btn.addEventListener('click', async () => {
        try {
            await navigator.share(shareData)
            resultPara.textContent = 'Meme shared successfully'
        } catch (err) {
            resultPara.textContent = 'Error: ' + err
        }
    });
}

function uploadImg() {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg");

    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.user-msg').innerText = `Your photo is available here: ${uploadedImgUrl}`

        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }
    doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {
    const formData = new FormData();
    formData.append('img', imgDataUrl)
    fetch('//ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}

function onSetLineSticker(elBtn) {
    setLineTxt(elBtn.innerText);
    renderMeme()
}


function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)

}

function onDown(ev) {
    canvasClicked(ev)
    const memes = getMeme();
    const pos = getEvPos(ev)
    // if (!memes.selectedLineIdx && !memes.selectedLineIdx===0 ) return
    console.log('ev', ev);
    setLineDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    const memes = getMeme();
    if (!memes.lines[gMeme.selectedLineIdx].isDrag) return
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveLine(dx, dy)
    gStartPos = pos
    renderMeme()
}

function onUp() {
    setLineDrag(false)
    document.body.style.cursor = 'grab'
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft,
            y: ev.pageY - ev.target.offsetTop
        }
    }
    return pos
}
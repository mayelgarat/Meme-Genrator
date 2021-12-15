'use strict'

initGallery();

function initGallery() {
    console.log('initGallery');
    renderImgs()
}

function goToGallery() {
    document.querySelector('.gallery').classList.remove('none');
    document.querySelector('.editor').classList.add('none');
}

function renderImgs() {
    var str = ''
    for (var i = 1; i <= 18; i++) {
        str += ` <div class="box box${i}"><img class="grid-img" src="/meme-imgs (square)/${i}.jpg" onclick="renderMeme(this)">
    </div>`
    }
    document.querySelector('.grid-container').innerHTML = str;
}
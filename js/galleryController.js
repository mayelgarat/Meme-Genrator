'use strict'

initGallery();

function initGallery() {
    renderImgs()
}

function goToGallery() {
    document.querySelector('.gallery').classList.remove('hidden');
    document.querySelector('.editor').classList.add('hidden');
    document.querySelector('.memes').classList.add('hidden');
    document.querySelector('.about').classList.remove('hidden');
}

function goToAbout() {
    document.querySelector('.gallery').classList.add('hidden');
    document.querySelector('.memes').classList.add('hidden');
    document.querySelector('.about').classList.remove('hidden');
    document.querySelector('.editor').classList.add('hidden');
}

function renderImgs() {
    var imgs = getMemesForDisplay()
    if (!imgs.length) imgs = getImgs()
    var str = imgs.map((img, i) => {
        return `<div class="box box${i+1}"><img class="grid-img img-${img.id}"id=${i+1} src="./meme-imgs(square)/${img.url}" onclick="setImg(this)">
  </div>`
    })
    document.querySelector('.grid-container').innerHTML = str.join('');
}

function onSetFilterBy(input) {
var value = input.toLowerCase();
    setFilterBy(value)
    renderImgs()
}
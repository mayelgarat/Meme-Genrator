'use strict'

initGallery();

function initGallery() {

    console.log('initGallery');
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
    var str = ''
    for (var i = 1; i <= 18; i++) {
        str += ` <div class="box box${i}"><img class="grid-img img-${i}"id=${i} src="./meme-imgs(square)/${i}.jpg" onclick="setImg(this)">
    </div>`
    }
    document.querySelector('.grid-container').innerHTML = str;
}

function onSetSortBy() {
    var x = document.querySelectorAll("option").value
    // if (!x) return;
    console.log('x', x);
    setSort(sortBy)
    renderMeme();
}


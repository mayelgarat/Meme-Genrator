'use strict'

initGallery();

function initGallery() {
    document.querySelector('.editor').classList.add('hidden');
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
    console.log(imgs);
    var str = imgs.map((img, i) => {
        return `<div class="box box${i+1}">
            <img class="grid-img img-${img.id}"id=${i+1} src="./meme-imgs(square)/${img.url}" onclick="initMeme(this)">
        </div>`
    })
    document.querySelector('.grid-container').innerHTML = str.join('');
}

function onSetFilterBy(input) {
var value = input.toLowerCase();
    setFilterBy(value)
    renderImgs()
}



// // The next 2 functions handle IMAGE UPLOADING to img tag from file system: 
// function onImgInput(ev) {
//     loadImageFromInput(ev, renderImgs)
// }

// function loadImageFromInput(ev, onImageReady) {
//     document.querySelector('.share-container').innerHTML = ''
//     var reader = new FileReader()

//     reader.onload = (event) => {
//         console.log('onload');
//         var img = new Image()
//         // Render on canvas
//         img.onload = onImageReady.bind(null, img)
//         img.src = event.target.result
//         console.log('img.src', img.src);
//     }
//     console.log('after');
//     reader.readAsDataURL(ev.target.files[0])
// }





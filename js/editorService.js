'use strict'
var gLine = 0;


// var gKeywordSearchCountMap = {
//     'funny': countFunny(),
//     'cat': countCat(),
//     'baby': countBaby()
// }

var gImgs;

function getImgs() {
    return gImgs;
}

gImgs = [{
        id: 1,
        url: 'img/1.jpg',
        keywords: ['funny', 'trump']
    },
    {
        id: 2,
        url: 'img/2.jpg',
        keywords: ['cute', 'dogs'],
    }, {
        id: 3,
        url: 'img/3.jpg',
        keywords: ['baby', 'dogs'],
    }, {
        id: 4,
        url: 'img/4.jpg',
        keywords: ['cute', 'cats'],
    }, {
        id: 5,
        url: 'img/5.jpg',
        keywords: ['baby', 'funny'],
    }, {
        id: 6,
        url: 'img/6.jpg',
        keywords: ['crazy', 'funny'],
    }, {
        id: 7,
        url: 'img/7.jpg',
        keywords: ['baby', 'funny'],
    }, {
        id: 8,
        url: 'img/8.jpg',
        keywords: ['funny', 'crazy'],
    }, {
        id: 9,
        url: 'img/9.jpg',
        keywords: ['cute', 'dogs'],
    }, {
        id: 10,
        url: 'img/10.jpg',
        keywords: ['crazy', 'baby'],
    }, {
        id: 11,
        url: 'img/11.jpg',
        keywords: ['funny', 'crazy'],
    }, {
        id: 12,
        url: 'img/12.jpg',
        keywords: ['funny', 'crazy'],
    }, {
        id: 13,
        url: 'img/13.jpg',
        keywords: ['cute', 'happy'],
    }, {
        id: 14,
        url: 'img/14.jpg',
        keywords: ['sarcastic', 'sad'],
    }, {
        id: 15,
        url: 'img/15.jpg',
        keywords: ['sad', 'sarcastic'],
    }, {
        id: 16,
        url: 'img/16.jpg',
        keywords: ['funny', 'happy'],
    }, {
        id: 17,
        url: 'img/17.jpg',
        keywords: ['sarcastic', 'crazy'],
    }, {
        id: 18,
        url: 'img/18.jpg',
        keywords: ['happy', 'cute'],
    }
];
// var gCanvasHight = getCanvasHeight();
// var gCanvasWidth = getCanvasWidth();
// console.log('gCanvasHight', gCanvasHight);
// console.log('gCanvasWidth', gCanvasWidth);

var gCurrLine = 0;
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: ' ',
        size: 30,
        align: 'left',
        colorFill: 'white',
        colorStroke: 'black',
        x: 250,
        y: 50,

    }]
}


function setLineNum() {
    if (gMeme.lines[gMeme.selectedLineIdx].txt === '') return
    gCurrLine++;

    gMeme.selectedLineIdx++

    console.log('gCurrLine', gCurrLine);
    console.log('gMeme', gMeme);
    document.querySelector('.text').value = ''
}

function getMeme() {
    return gMeme;
}

function setLineTxt(text) {
    if (gMeme.selectedLineIdx === 0) {
        _setY(text, 50)
    } else if (gMeme.selectedLineIdx === 1) {
        _setY(text, 450)
    } else {
        if (gCurrLine === gMeme.selectedLineIdx) {
            _setY(text, 250)
        } else {
            // gMeme.selectedLineIdx++;
            _setY(text, 250)
        }
    }
    renderMeme();
}

function _setY(text, y) {
    gMeme.lines[gMeme.selectedLineIdx] = ({
        txt: `${text}`,
        size: 40,
        align: 'center',
        colorFill: 'white',
        colorStroke: 'black',
        x: 250,
        y: y,

    })
}

function setImg(img) {
    gMeme = {
        selectedImgId: img.id,
        selectedLineIdx: 0,
        lines: [{
            txt: '',
            size: 30,
            align: 'center',
            colorFill: 'white',
            colorStroke: 'black',
            x: 50,
            y: 50,

        }]
    }
    document.querySelector('.text').value = ''
    renderMeme();
}

function setFillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].colorFill = `${color}`;
}

function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].colorStroke = `${color}`;
}

function changeFontSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff;
}

function changeY(diff) {
    gMeme.lines[gMeme.selectedLineIdx].y += diff;
}

function switchLine() {

    const length = gMeme.lines.length
    if (length === 0) return

    if (gMeme.selectedLineIdx === length - 1) gMeme.selectedLineIdx = 0;
    else {
        gMeme.selectedLineIdx++
    }

}


function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
}

function setAlign(alignment) {
    console.log('gMeme.selectedLineIdx', gMeme.selectedLineIdx);
    if (alignment === 'left') gMeme.lines[gMeme.selectedLineIdx].x = 60
    else if (alignment === 'center') gMeme.lines[gMeme.selectedLineIdx].x = 250
    else gMeme.lines[gMeme.selectedLineIdx].x = 440
}

function setClickedLine(clickedLine) {
    console.log('set click...');
    gMeme.selectedLineIdx = clickedLine
    console.log('gMeme', gMeme);
}
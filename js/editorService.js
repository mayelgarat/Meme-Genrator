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

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: ' ',
        size: 30,
        align: 'left',
        colorFill: 'red',
        colorStroke: 'black',
        x: 50,
        y: 50,
    }]
}

function setLineNum() {
    gLine++;
}

function getMeme() {
    return gMeme;
}

function setLineTxt(text) {
    if (gLine === gMeme.selectedLineIdx) {
        gMeme.lines[gMeme.selectedLineIdx] = ({
            txt: `${text}`,
            size: 40,
            align: 'center',
            colorFill: 'white',
            colorStroke: 'black',
            x: 50,
            y: 50,
        })
    } else {
        gMeme.selectedLineIdx++;
        gMeme.lines.push({
            txt: `${text}`,
            size: 40,
            align: 'center',
            colorFill: 'white',
            colorStroke: 'black',
            x: 50,
            y: 50,
        })
    }
    renderMeme();
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
'use strict'
var gLine = 0;

// var gKeywordSearchCountMap = {
//     'funny': countFunny(),
//     'cat': countCat(),
//     'baby': countBaby()
// }

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
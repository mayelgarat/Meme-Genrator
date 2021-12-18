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
        x: 225,
        y: 50,
        isDrag: false

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
    console.log('text', text);
    if (gMeme.selectedLineIdx === 0) {
        _setY(text, 50)
        console.log('text', text);
    } else if (gMeme.selectedLineIdx === 1) {
        _setY(text, 400)
    } else {
        if (gCurrLine === gMeme.selectedLineIdx) {
            _setY(text, 225)
        } else {
            // gMeme.selectedLineIdx++;
            _setY(text, 225)
        }
    }
    // renderMeme();
}

function _setY(text, y) {
    gMeme.lines[gMeme.selectedLineIdx] = ({
        txt: `${text}`,
        size: 40,
        align: 'center',
        colorFill: 'white',
        colorStroke: 'black',
        x: 225,
        y: y,
        isDrag: false

    })
    console.log('gMeme', gMeme);
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
            isDrag: false
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
    if (alignment === 'left') gMeme.lines[gMeme.selectedLineIdx].x = 40
    else if (alignment === 'center') gMeme.lines[gMeme.selectedLineIdx].x = 225
    else gMeme.lines[gMeme.selectedLineIdx].x = 400
}

function setClickedLine(clickedLine) {
    console.log('set click...');
    gMeme.selectedLineIdx = clickedLine
    console.log('gMeme', gMeme);
}


function setLineDrag(clickedLine, isDrag) {
    gMeme.lines[clickedLine].isDrag = isDrag
}

function moveLine(dx, dy) {
    gMeme.lines[gClickedLine].x += dx
    gMeme.lines[gClickedLine].y += dy

}
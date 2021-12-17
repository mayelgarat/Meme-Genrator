'use strict'


var gMemeStorage = loadFromStorage('MemesDB')
console.log('gMemeStorage', gMemeStorage);

function getMemesFromStorage() {
    return gMemeStorage;
}
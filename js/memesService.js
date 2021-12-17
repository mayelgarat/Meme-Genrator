'use strict'
var gSavedMemes = [];

const STORAGE_KEY = 'MemesDB'
// gSavedMemes = loadFromStorage(STORAGE_KEY)
console.log('gSavedMemes', gSavedMemes);

function getSavedMemes() {
    return gSavedMemes;
}


function save() {
    const memes = getMeme();
    if (gSavedMemes.length === 0) {
        gSavedMemes[0] = memes
    } else gSavedMemes.push(memes) 
    console.log('gSavedMemes', gSavedMemes);
    saveToStorage(STORAGE_KEY, gSavedMemes)

}
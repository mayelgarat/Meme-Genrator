'use strict'
var gSavedMemes;

const STORAGE_KEY = 'MemesDB'
gSavedMemes = loadFromStorage(STORAGE_KEY)
function getSavedMemes() {
    return gSavedMemes;
}


function save() {
    const memes = getMeme();
    if (!gSavedMemes || gSavedMemes.length === 0) {
        gSavedMemes = []
        gSavedMemes[0] = memes
    } else gSavedMemes.push(memes) 
    saveToStorage(STORAGE_KEY, gSavedMemes)

}
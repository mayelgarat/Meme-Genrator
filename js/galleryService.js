'use strict'

var gFilterBy = 'All';
var gImgs;

function getImgs() {
    return gImgs;
}
gImgs = [{
        id: 1,
        url: '/1.jpg',
        keywords: ['funny', 'crazy']
    },
    {
        id: 2,
        url: '/2.jpg',
        keywords: ['cute', 'dogs'],
    }, {
        id: 3,
        url: '/3.jpg',
        keywords: ['baby', 'dogs'],
    }, {
        id: 4,
        url: '/4.jpg',
        keywords: ['cute', 'cats'],
    }, {
        id: 5,
        url: '/5.jpg',
        keywords: ['baby', 'funny'],
    }, {
        id: 6,
        url: '/6.jpg',
        keywords: ['crazy', 'funny'],
    }, {
        id: 7,
        url: '/7.jpg',
        keywords: ['baby', 'funny'],
    }, {
        id: 8,
        url: '/8.jpg',
        keywords: ['funny', 'crazy'],
    }, {
        id: 9,
        url: '/9.jpg',
        keywords: ['crazy', 'cute'],
    }, {
        id: 10,
        url: '/10.jpg',
        keywords: ['crazy', 'baby'],
    }, {
        id: 11,
        url: '/11.jpg',
        keywords: ['funny', 'crazy'],
    }, {
        id: 12,
        url: '/12.jpg',
        keywords: ['funny', 'crazy'],
    }, {
        id: 13,
        url: '/13.jpg',
        keywords: ['cute', 'happy'],
    }, {
        id: 14,
        url: '/14.jpg',
        keywords: ['sarcastic', 'sad'],
    }, {
        id: 15,
        url: '/15.jpg',
        keywords: ['crazy', 'sarcastic'],
    }, {
        id: 16,
        url: '/16.jpg',
        keywords: ['funny', 'happy'],
    }, {
        id: 17,
        url: '/17.jpg',
        keywords: ['sarcastic', 'crazy'],
    }, {
        id: 18,
        url: '/18.jpg',
        keywords: ['happy', 'cute'],
    }
];

function setFilterBy(value) {
    gFilterBy = value
}

function getMemesForDisplay() {
    if (gFilterBy === 'All') return gImgs;
    var gImgsFilter = gImgs.filter(img => {
        return (
            img.keywords[0] === 'funny' && gFilterBy === 'funny' || img.keywords[1] === 'funny' && gFilterBy === 'funny' ||
            img.keywords[0] === 'cute' && gFilterBy === 'cute' || img.keywords[1] === 'cute' && gFilterBy === 'cute' ||
            img.keywords[0] === 'dogs' && gFilterBy === 'dogs' || img.keywords[1] === 'dogs' && gFilterBy === 'dogs' ||
            img.keywords[0] === 'cats' && gFilterBy === 'cats' || img.keywords[1] === 'cats' && gFilterBy === 'cats' ||
            img.keywords[0] === 'crazy' && gFilterBy === 'crazy' || img.keywords[1] === 'crazy' && gFilterBy === 'crazy' ||
            img.keywords[0] === 'sarcastic' && gFilterBy === 'sarcastic' || img.keywords[1] === 'sarcastic' && gFilterBy === 'sarcastic' ||
            img.keywords[0] === 'happy' && gFilterBy === 'happy' || img.keywords[1] === 'happy' && gFilterBy === 'happy'
        )
    })
    return gImgsFilter
}


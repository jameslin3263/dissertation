var clicked = false
var border = 'border'
var bgc = 'bgc'
var play = false
var firstClick = false
var generateArr = true
// let stoped = true


$(document).ready(() => {
    $('#container').load('./home.html')
})

function clickHome() {
    generateArr = true
    $('#home')
        .addClass('active')
        .siblings('.item')
        .removeClass('active')

    $('#container').load('./home.html')
}

// click to display 'Insertion sort' page
function clickInsertionSort() {
    generateArr = true
    $('#insertion-sort')
        .addClass('active')
        .siblings('.item')
        .removeClass('active')

    $('#container').load('./insertionSort.html', () => {
        $('#pause').hide()
        $('#play').hide()
        $('#pre').hide()
        $('#next').hide()
        $('#stop').hide()
        $('#reset').hide()
        $('#input-handler').hide()
        $('#clearFilm').hide()
        $('#clearHandle').hide()
        $('#input-error').show()
        $('#input-error')[0].textContent = 'Please select one mode to begin.'
    })
}

// click to display 'Selectiontion sort' page
function clickSelectionSort() {
    generateArr = true
    $('#selection-sort')
        .addClass('active')
        .siblings('.item')
        .removeClass('active')

    $('#container').load('./selectionSort.html', () => {
        $('#sel-pause').hide()
        $('#sel-play').hide()
        $('#sel-pre').hide()
        $('#sel-next').hide()
        $('#sel-stop').hide()
        $('#sel-reset').hide()
        $('#input-handler').hide()
        $('#sel-clearFilm').hide()
        $('#sel-clearHandle').hide()
        $('#input-error').show()
        $('#input-error')[0].textContent = 'Please select one mode to begin.'
    })
}

// click to display 'About' page
function clickAbout() {
    generateArr = true
    $('#about')
        .addClass('active')
        .siblings('.item')
        .removeClass('active')

    $('#container').load('./about.html')
}


// This 'sleep' function is refered from 
// https://stackoverflow.com/questions/1447407/whats-the-equivalent-of-javas-thread-sleep-in-javascript
async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec))
}




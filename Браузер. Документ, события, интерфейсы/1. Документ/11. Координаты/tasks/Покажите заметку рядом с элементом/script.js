'use strict';

function positionAt(anchor, position, elem) {
    elem.style.position = 'absolute';
    let anchor_coords = anchor.getBoundingClientRect();
    if (position === 'top-out') {
        elem.style.left = anchor_coords.left + window.scrollX + 'px';
        elem.style.top = anchor_coords.top - elem.offsetHeight + window.scrollY + 'px';
    } else if (position === 'right-out') {
        elem.style.left = anchor_coords.right + window.scrollX + 'px';
        elem.style.top = anchor_coords.top + window.scrollY + 'px';
    } else if (position === 'bottom-out') {
        elem.style.left = anchor_coords.left + window.scrollX + 'px';
        elem.style.top = anchor_coords.bottom + window.scrollY + 'px';
    } else if (position === 'top-in') {
        elem.style.left = anchor_coords.left + window.scrollX + 'px';
        elem.style.top = anchor_coords.top + window.scrollY + 'px';
    } else if (position === 'right-in') {
        elem.style.left = anchor_coords.right - elem.offsetWidth + window.scrollX + 'px';
        elem.style.top = anchor_coords.top + window.scrollY + 'px';
    } else if (position === 'bottom-in') {
        elem.style.left = anchor_coords.left + window.scrollX + 'px';
        elem.style.top = anchor_coords.bottom - elem.offsetHeight + window.scrollY + 'px';
    }
}

function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
    //setTimeout(() => note.remove(), 3000);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-out", "note bottom-out");
showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "right-in", "note right-in");
showNote(blockquote, "bottom-in", "note bottom-in");
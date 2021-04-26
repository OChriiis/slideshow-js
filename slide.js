'use strict';

const images = [
    { 'id': '1', 'url':'./img/real.png' },
    { 'id': '2', 'url':'./img/barca.png' },
    { 'id': '3', 'url':'./img/city.png' },
    { 'id': '4', 'url':'./img/juventus.png' },
    { 'id': '5', 'url':'./img/atletico.png' },
    { 'id': '6', 'url':'./img/united.png' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const next = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const previous = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#next').addEventListener('click', next);
document.querySelector('#previous').addEventListener('click', previous);
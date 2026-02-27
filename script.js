let imgCollection = [
    './assets/img/01-bohne-closeup.jpg',
    './assets/img/02-fointain.jpg',
    './assets/img/03-hard-at-work.jpeg',
    './assets/img/04-some-stairs-in-tokyo.jpg',
    './assets/img/05-bohne-and-i.jpg',
    './assets/img/06-some-temple-in-japan.jpg',
];

const imageViewer = document.getElementById('img-viewer');

function openImageViewer(){
    imageViewer.showModal();
}

function renderImages(){
    for (let i = 1; i < imgCollection.length; i++) {
        let imgBox = document.getElementById('img-location');
        imgBox.innerHTML += `<img class="img-thumbnail" src="${imgCollection[i]}" onclick="openImageViewer()">`;    
    }
}
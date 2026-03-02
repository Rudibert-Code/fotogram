let imgCollection = [
    './assets/img/01-bohne-closeup.jpg',
    './assets/img/02-fointain.jpg',
    './assets/img/03-hard-at-work.jpeg',
    './assets/img/04-some-stairs-in-tokyo.jpg',
    './assets/img/05-bohne-and-i.jpg',
    './assets/img/06-some-temple-in-japan.jpg',
];

const dialogWindow = document.getElementById('img-closeup');

function openImageViewer(number){
    dialogWindow.showModal();

    // define dialog title (h2)
    let dialogTitle = document.getElementById('dialoge-url');
    dialogTitle.innerHTML = "";
    dialogTitle.innerHTML += imgCollection[number];

    // define dialog image
    let dialogImage = document.getElementById('img-viewer');
    dialogImage.innerHTML += `<img class="dialog-img" src="${imgCollection[number]}">`;
}

function renderImages(){
    for (let i = 0; i < imgCollection.length; i++) {
        let imgBox = document.getElementById('img-location');
        imgBox.innerHTML += `<img class="img-thumbnail" src="${imgCollection[i]}" onclick="openImageViewer('${[i]}')">`;    
    }
}
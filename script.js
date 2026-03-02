let imgCollection = [
    './assets/img/01-bohne-closeup.jpg',
    './assets/img/02-fointain.jpg',
    './assets/img/03-hard-at-work.jpeg',
    './assets/img/04-some-stairs-in-tokyo.jpg',
    './assets/img/05-bohne-and-i.jpg',
    './assets/img/06-some-temple-in-japan.jpg',
];

const dialogWindow = document.getElementById('img-closeup');
let savedNumber = 0;

function openDialog(number){
    savedNumber = number;
    dialogWindow.showModal();
    // define dialog title (h2)
    let dialogTitle = document.getElementById('dialoge-url');
    dialogTitle.innerHTML = "";
    dialogTitle.innerHTML = imgCollection[number];
    // define dialog image
    let dialogImage = document.getElementById('dialogMain');
    dialogImage.innerHTML = `<img class="dialog-img" src="${imgCollection[number]}">`;
    // define image number
    let dialogImgNumber = document.getElementById('dialog-img-number');
    dialogImgNumber.innerHTML = "";
    number++
    dialogImgNumber.innerHTML = number + " / " + imgCollection.length;
}

function closeDialog(){
    dialogWindow.close();
}

function renderImages(){
    for (let i = 0; i < imgCollection.length; i++) {
        let imgBox = document.getElementById('img-location');
        imgBox.innerHTML += `<img class="img-thumbnail" src="${imgCollection[i]}" onclick="openDialog('${[i]}')">`; 
    }
}
function buttonNext(){
    number = savedNumber;
    i = imgCollection.length;
    i--
    number++
    if (number > i) {
        number = 0;
    }
    // define dialog title (h2)
    let dialogTitle = document.getElementById('dialoge-url');
    dialogTitle.innerHTML = "";
    dialogTitle.innerHTML = imgCollection[number];
    // define dialog image
    let dialogImage = document.getElementById('dialogMain');
    dialogImage.innerHTML = `<img class="dialog-img" src="${imgCollection[number]}">`;
    // define image number
    let dialogImgNumber = document.getElementById('dialog-img-number');
    dialogImgNumber.innerHTML = "";
    savedNumber = number;
    number++
    dialogImgNumber.innerHTML = number + " / " + imgCollection.length;
    
}
function buttonPrevious(){
    number = savedNumber;
    i = imgCollection.length;
    i--
    number--
    if (number < 0) {
        number = i;
    }
    // define dialog title (h2)
    let dialogTitle = document.getElementById('dialoge-url');
    dialogTitle.innerHTML = "";
    dialogTitle.innerHTML = imgCollection[number];
    // define dialog image
    let dialogImage = document.getElementById('dialogMain');
    dialogImage.innerHTML = `<img class="dialog-img" src="${imgCollection[number]}">`;
    // define image number
    let dialogImgNumber = document.getElementById('dialog-img-number');
    dialogImgNumber.innerHTML = "";
    savedNumber = number;
    number++
    dialogImgNumber.innerHTML = number + " / " + imgCollection.length;
    
}
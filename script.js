let imgCollection = [
    './assets/img/01-bohne-closeup.jpg',
    './assets/img/02-fointain.jpg',
    './assets/img/03-hard-at-work.jpeg',
    './assets/img/04-some-stairs-in-tokyo.jpg',
    './assets/img/05-bohne-and-i.jpg',
    './assets/img/06-some-temple-in-japan.jpg',
];

let imgDescription = [
    'the image depicts the close up of a dogs head',
    'the image depicts a large multi layered fountain with a winding pair of stairs on its sides and a metallic bull head at the very top',
    'the image depicts a pair of legs resting on a graphic tablet',
    'the image depicts a staircase at night illuminated by rainbow-colored lights',
    'the image depicts a person holding a small dog',
    'the image depicts a wide angle shot of a crowd surrounding a large metallic buddha statue',
];

const dialogWindow = document.getElementById('img-closeup');

document.addEventListener("keyup", processKeyEntered);

let dialogState = false;

let savedNumber = 0;

function processKeyEntered(key){
    if (dialogState == true) {
        console.log(key); 
        if (key.key == "ArrowRight") {
            buttonNext();
        } else if(key.key == "ArrowLeft"){
            buttonPrevious();
        } else if(key.key == "Escape"){
            closeDialog();
        }
    }
}

function openDialog(number){
    dialogState = true;
        console.log("Dialog " + dialogState)
    savedNumber = number;
    dialogWindow.showModal();

    // define dialog title (h2)
    let dialogTitle = document.getElementById('dialoge-url');
    dialogTitle.innerHTML = "";
    dialogTitle.innerHTML = imgCollection[number];

    // define dialog image
    let dialogImage = document.getElementById('dialogMain');
    dialogImage.innerHTML = `<img aria-haspopup="dialog" aria-controls="img-closeup" class="dialog-img" src="${imgCollection[number]}" alt="imgDescription('${[number]}')">`;

    // define image number
    let dialogImgNumber = document.getElementById('dialog-img-number');
    dialogImgNumber.innerHTML = "";
    number++
    dialogImgNumber.innerHTML = number + " / " + imgCollection.length;
}

function closeDialog(){
    dialogState = false;
    console.log("Dialog " + dialogState)
    dialogWindow.close();
}

function renderImages(){
    for (let i = 0; i < imgCollection.length; i++) {
        let imgBox = document.getElementById('img-location');
        imgBox.innerHTML += `<img aria-haspopup="dialog" aria-controls="img-closeup" class="img-thumbnail" src="${imgCollection[i]}" onclick="openDialog('${[i]}')" alt="${imgDescription[i]}">`; 
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
    dialogImage.innerHTML = `<img aria-haspopup="dialog" aria-controls="img-closeup" class="dialog-img" src="${imgCollection[number]}" alt="${imgDescription[number]}">`;

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
    dialogImage.innerHTML = `<img class="dialog-img" src="${imgCollection[number]}" alt="${imgDescription[number]}">`;

    // define image number
    let dialogImgNumber = document.getElementById('dialog-img-number');
    dialogImgNumber.innerHTML = "";
    savedNumber = number;
    number++
    dialogImgNumber.innerHTML = number + " / " + imgCollection.length;
    
}
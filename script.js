let imgCollection = [
    './img/01-bohne-closeup.jpg',
    './img/02-fointain.jpg',
    './img/03-hard-at-work.jpeg',
    './img/04-some-stairs-in-tokyo.jpg',
    './img/05-bohne-and-i.jpg',
    './img/06-some-temple-in-japan.jpg'
]

function renderImages(){
    console.log("works");
    for (let index = 0; index < imgCollection.length; index++) {
        console.log(index);
        document.getElementById('img-location').innerHTML ('<img class="img-thumbnail" src="'imgCollection[index]'" alt="">');    
    }
}
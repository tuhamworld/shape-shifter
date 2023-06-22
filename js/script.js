let result = document.querySelector('#imagesResult');
let btn = document.querySelector('.btn');
let start = 0;

let myImages = [
];

myImages.push('../images/beautiful_scene.jpg')
myImages.push('../images/caligraphy.jpg')
myImages.push('../images/eid_mubarak.jpg')
myImages.push('../images/lady_supplicating.jpg')
myImages.push('../images/mosque.jpg')
myImages.push('../images/quran.jpg')
myImages.push('../images/ramadan_mubarak.jpg')
myImages.push('../images/symbol.jpg')


btn.addEventListener('click', changeImage, true);

function changeImage() {
    start++;


    if (start >= myImages.length) {
        start = 0;
    }
    result.src = myImages[start];
}
result.src = myImages[start];
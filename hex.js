const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', function () {
    
    let hexcolor="#";

//for döngüsü ile 6 haneli bir hex kodu oluşturduk ve hexcolor deeğişkeni içerisine ekledik.

    for (let i = 0; i < 6; i++) {
// eklenecek ifadelerin hepsinin aynı olmaması için random fonksiyonu kullandık.
        hexcolor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexcolor;
    color.textContent = hexcolor;

});



function getRandomNumber() {
    
    return Math.floor(Math.random() * hex.length);

}
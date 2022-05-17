const colors = ["green", "red", "blue", "black"];
// renk değiştirme butonunu çağırdık.
const btn = document.getElementById('btn');
// renk kodunun yazılacagı spanı çağırdık.
const color = document.querySelector('.color');

// her btn ye tıkladığımızda fonksiyon çalışacak.
btn.addEventListener('click', function () {

    //rastgele bir sayı ürettik. bu sayı sayesinde colors arreyinden rastgele bir index seçebildik.
    const randomNumber = getRandomNumber();
    // ürettiğimiz rastgele sayıyla bg color ı değiştirdik.
    document.body.style.backgroundColor = colors[randomNumber];
    // yine rastgele sayı ile span içerisindeki hex kodu değiştirdik.
    color.textContent = colors[randomNumber];
});


//rastgele sayı üretme fonksiyonu "Math.random" her zaman 1'den küçük ondalıklı sayı üretir.
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
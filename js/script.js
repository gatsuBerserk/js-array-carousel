// Array con immagini
const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
]; 

console.log(images)

carouselLeft ="";
// Abbiamo lateralmente a sinistra 5 Img. (Proviamo con una)
    // 1) Inseriamo l'immagine nel riquadro sinistro 
    
    for (let i = 0 ; i < images.length ; i++){ 
        carouselLeft += `
        <div class="my-size-left border-bottom">
        <img src="${images[i]}" class="my-img-left" alt="Random picture">
        </div>`
    }; 
    const carouselWrapper = document.querySelector('div.multi-img');
    carouselWrapper.innerHTML += carouselLeft;
// § fine aggiunta -->


// Quando ne selezioniamo 1 deve apparire nel riquadro centrale. (Proviamo con la prima)

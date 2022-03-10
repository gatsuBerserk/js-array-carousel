// Array con immagini
const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
]; 

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise', 
    
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,', 
    
] 



let imgCentral= document.querySelector("div.my-img"); 
let coverImg="";
let leftImg= document.querySelector("div.dom-multi-img");
let imgPrew=""; 

for(let i = 0; i < images.length; i++ ){
    coverImg += 
    ` 

        <img class="my-size-img-central" src="${images[i]}" alt=""> 
        <div class=" description text-white position-absolute "> 
        <p class="fs-3"> ${title [i]}</p>
        <p class="fs-5"> ${text [i]}</p>
        </div>
        
    `
    imgPrew +=
    ` 
    <div class="my-size-left">
        <img class="my-img-left img-fluid" src="${images[i]}" alt=""> 
    </div> 
    `

};
imgCentral.innerHTML= coverImg; 
leftImg.innerHTML= imgPrew; 

// elementi visibili uno per volta

let activeElement= 0;
document.getElementsByClassName("my-size-img-central")[activeElement].classList.add("active"); 
document.getElementsByClassName("my-img-left")[activeElement].classList.add("active"); 
document.getElementsByClassName("description")[activeElement].classList.add("active");


// arrow
const up = document.querySelector("div.arrow-up");

up.addEventListener("click", function() {
    
    document.getElementsByClassName("my-size-img-central")[activeElement].classList.remove("active");
    document.getElementsByClassName("description")[activeElement].classList.remove("active");
    
 
    
    if(activeElement === 0){
        activeElement= images.length -1; 
    }else{
        activeElement--;
    }; 

    
    document.getElementsByClassName("my-size-img-central")[activeElement].classList.add("active");
    document.getElementsByClassName("description")[activeElement].classList.add("active");
    
    
}); 

const down= document.querySelector("div.arrow-down");
down.addEventListener("click", function() {
    document.getElementsByClassName("my-size-img-central")[activeElement].classList.remove("active");
    document.getElementsByClassName("description")[activeElement].classList.remove("active");
   

    if( activeElement === images.length -1){
        activeElement= 0;
    }else{
        activeElement++;
    }
    
    document.getElementsByClassName("my-size-img-central")[activeElement].classList.add("active");
    document.getElementsByClassName("description")[activeElement].classList.add("active");
    
});  




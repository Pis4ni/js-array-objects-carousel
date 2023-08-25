// !recupero gli elementi dal dom
const slideEl = document.querySelectorAll('slide')
const slidesContainerEl = document.getElementById('slides-container-main')
const prevEl = document.getElementById('prev')
const nextEl = document.getElementById('next')
console.log(slidesContainerEl);
console.log(slideEl);
let active = 'active';
 

console.log(images);
// ! aggiungo dinamicamente le slides al container
for(const slide of images){
    console.log('funziona');
slidesContainerEl.innerHTML += `
<!-- slides -->
<div class="slide ${active}">
    <!-- title -->
    <h2 class="slide-title">
        ${slide.title}
    </h2>
    <!-- description -->
    <p class="slide-description">
        ${slide.text}
    </p>
    <!-- source -->
    <img src="${slide.image}" alt="${slide.text}">
</div>
` 
active = ''
}


const imagesArray = document.getElementsByClassName('slide')
console.log(imagesArray);
let counter = 0

prevEl.addEventListener('click', ()=>{
    if (counter >= 0) {
        counter = imagesArray.legth -1
    }else{
        imagesArray[counter].classList.remove('active')
        counter --
        imagesArray[counter].classList.add('active')
    }
})

nextEl.addEventListener('click', ()=>{
    if (counter == imagesArray.length -1) {
        counter = 0
    }else{
        imagesArray[counter].classList.remove('active')
        counter ++
        imagesArray[counter].classList.add('active')
    }
})

        
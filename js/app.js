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
/* for(const slide of images){
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
*/
images.forEach((element, index) => {
    element.image
});


        
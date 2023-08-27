// !recupero gli elementi dal dom

const slidesContainerEl = document.getElementById('slides-container-main')
const prevEl = document.getElementById('prev')
const nextEl = document.getElementById('next')
const imagesArray = document.getElementsByClassName('slide')
const miniatureArray = document.getElementsByClassName('miniature')
const miniatureContainerEl = document.getElementById('miniature-container')

const playBtn = document.getElementById('play')
const stopBtn = document.getElementById('stop')
const invertBtn = document.getElementById('invert')

let direction = 0
console.log(miniatureArray);

let sliderState = 'next'
// ! contatore slide attuale
let counter = 0

// ! nome classe da aggiungere al dom
let active = 'active';
 
console.log(images);
//! ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ON LOAD  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ! aggiungo dinamicamente le slides al container
for(const slide of images){
    
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
    
    miniatureContainerEl.innerHTML += `
    <div class="miniature">
    <img src="${slide.image}" alt="${slide.text}">
    </div>
    
    `

}

// ! auto scroll
// setInterval(nextSlide,50000)
// let nextInterval = setInterval(nextSlide,50000)

let nextInterval = setInterval(nextSlide,5000)
clearInterval(nextInterval)
let prevInterval = setInterval(prevSlide,5000)
clearInterval(prevInterval)
//! ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ON CLICK  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//! event listener pulsanti
prevEl.addEventListener('click', prevSlide)
nextEl.addEventListener('click', nextSlide)
//! event listener miniature
for (let i = 0; i < miniatureArray.length; i++) {
    console.log(i);
    miniatureArray[i].addEventListener('click', ()=>{
    // txtOnPress(i)
    selectedSlide(i)
    })  
}
//! event listener pulsanti controllo slider
// invertBtn.addEventListener('click',invertSlider)

stopBtn.addEventListener('click', stopSlider)
playBtn.addEventListener('click', playSlider)
invertBtn.addEventListener('click', invertSlider)


//! funzioni ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function nextSlide(){

    // rimuovo classe dalla slide attuale
    imagesArray[counter].classList.remove('active');

    // aumento il contatore
    counter++; 

    // resetto il contatore se si arriva alla fine
    if (counter >= imagesArray.length) {
        counter = 0; 
    }

    // aggiungo classe alla nuova slide attuale
    imagesArray[counter].classList.add('active'); 
    console.log(counter);
}

function prevSlide(){
    // rimuovo classe dalla slide attuale
    imagesArray[counter].classList.remove('active');
    
    // decremento il contatore
    counter--; 

    // resetto il contatore se si arriva all' inizio
    if (counter < 0 ) {
        counter = imagesArray.length -1
    }

    // aggiungo classe alla nuova slide attuale
    imagesArray[counter].classList.add('active'); 
    console.log(counter);
}

function selectedSlide(index){
    // rimuovo classe "active" dala slide attualmente visualizzata
    imagesArray[counter].classList.remove('active');
    
    // aggiungo classe "active" alla slide selezionata
    imagesArray[index].classList.add('active');
    
    // aggiorno il contatore
    counter = index;
}

function stopSlider(){
    clearInterval(nextInterval)
    clearInterval(prevInterval)
}
function playSlider(){
    clearInterval(prevInterval)
    clearInterval(nextInterval)
    nextInterval = setInterval(nextSlide,5000)
    sliderState = 'next'
    
}
function invertSlider(){
    clearInterval(prevInterval)
    clearInterval(nextInterval)
    if (sliderState = 'next') {
        prevInterval = setInterval(prevSlide,5000)
        sliderState = 'prev'
    }else if (sliderState = 'prev') {
        nextInterval = setInterval(nextSlide,5000)
        sliderState = 'next'
    }else{
        prevInterval = setInterval(prevSlide,5000)
    }
}




/* function txtOnPress(minIndex){
    console.log(typeof minIndex);
    console.log(miniatureArray[minIndex], minIndex,
         typeof minIndex, 'ciao');
} */
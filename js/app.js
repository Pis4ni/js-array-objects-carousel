// !recupero gli elementi dal dom

const slidesContainerEl = document.getElementById('slides-container-main')
const prevEl = document.getElementById('prev')
const nextEl = document.getElementById('next')
const imagesArray = document.getElementsByClassName('slide')

// ! contatore slide attuale
let counter = 0

// ! nome classe da aggiungere al dom
let active = 'active';
 
console.log(images);
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
}

//! event listener pulsanti
prevEl.addEventListener('click', prevSlide)
nextEl.addEventListener('click', nextSlide)


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


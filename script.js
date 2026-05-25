function show(id){

    // hide all pages
    document.querySelectorAll('.page').forEach(p=>{
        p.classList.remove('active');
    });

    // reset video
    const video = document.querySelector("#video video");

    if(video){
        video.pause();
        video.currentTime = 0;
    }

    // show selected page
    document.getElementById(id).classList.add('active');

    // IMPORTANT:
    // reinitialize slides AFTER page becomes visible
    if(id === "slideshow"){
        setTimeout(()=>{
            initSlides();
        }, 10);
    }
}

/* slide stuff */
let slides = [];
let i = 0;

function initSlides(){

    slides = document.querySelectorAll('.slide');

    if(!slides.length) return;

    // hide all slides
    slides.forEach(s=>{
        s.classList.remove('active');
    });

    // reset index
    i = 0;

    // show first slide
    slides[i].classList.add('active');

    updateCounter();
}

function next(){

    if(!slides.length) return;

    slides[i].classList.remove('active');

    i++;

    if(i >= slides.length){
        i = 0;
    }

    slides[i].classList.add('active');

    updateCounter();
}

function prev(){

    if(!slides.length) return;

    slides[i].classList.remove('active');

    i--;

    if(i < 0){
        i = slides.length - 1;
    }

    slides[i].classList.add('active');

    updateCounter();
}

function updateCounter(){

    const counter = document.getElementById("slideCounter");

    if(counter){
        counter.innerText = `Slide ${i + 1} / ${slides.length}`;
    }
}

/* keyboard controls */
document.addEventListener("keydown", function(e){

    const slideshowPage = document.getElementById("slideshow");

    // only while slideshow open
    if(!slideshowPage.classList.contains("active")) return;

    if(e.key === "ArrowRight"){
        next();
    }

    if(e.key === "ArrowLeft"){
        prev();
    }
});

/* initialize */
window.addEventListener("load", ()=>{
    initSlides();
});

/* OPEN IMAGE */
function openImage(src){

    const viewer = document.getElementById("imageViewer");
    const img = document.getElementById("viewerImg");

    img.src = src;

    viewer.classList.add("active");
}

/* CLOSE IMAGE */
function closeImage(){

    document.getElementById("imageViewer")
    .classList.remove("active");
}

/* this is god awful but it works, and im not gonna organize it either :p */
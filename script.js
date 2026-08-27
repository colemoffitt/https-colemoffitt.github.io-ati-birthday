/* ==========================================================
   UNDER THE SAME SKY
   Part 3 - JavaScript
========================================================== */

const stars = document.getElementById("stars");
const particles = document.getElementById("particles");
const cursor = document.getElementById("cursor-light");

/* ==========================================
   CREATE STARS
========================================== */

for(let i=0;i<300;i++){

    const star=document.createElement("div");

    star.className="star";

    const size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animationDuration=
        (2+Math.random()*5)+"s";

    star.style.animationDelay=
        Math.random()*5+"s";

    stars.appendChild(star);

}

/* ==========================================
   FLOATING PARTICLES
========================================== */

for(let i=0;i<70;i++){

    const particle=document.createElement("div");

    particle.className="particle";

    particle.style.left=Math.random()*100+"%";
    particle.style.top=Math.random()*100+"%";

    particle.style.animationDuration=
        (12+Math.random()*15)+"s";

    particle.style.animationDelay=
        Math.random()*10+"s";

    particles.appendChild(particle);

}

/* ==========================================
   CURSOR LIGHT
========================================== */

let mouseX=window.innerWidth/2;
let mouseY=window.innerHeight/2;

let currentX=mouseX;
let currentY=mouseY;

document.addEventListener("mousemove",(e)=>{

    mouseX=e.clientX;
    mouseY=e.clientY;

});

function animateCursor(){

    currentX+=(mouseX-currentX)*0.08;
    currentY+=(mouseY-currentY)*0.08;

    cursor.style.left=currentX+"px";
    cursor.style.top=currentY+"px";

    requestAnimationFrame(animateCursor);

}

animateCursor();

/* ==========================================
   PAGE SYSTEM
========================================== */

const pages=document.querySelectorAll(".page");

let currentPage=0;

function showPage(index){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    setTimeout(()=>{

        pages[index].classList.add("active");

    },150);

}
document
.querySelectorAll(".next-page, .soundtrack-button")
.forEach(button=>{

    button.addEventListener("click",()=>{

        if(currentPage < pages.length-1){

            currentPage++;

            showPage(currentPage);

        }

    });

});

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        letter.classList.add("show");

    },700);

});
function createShootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.top=Math.random()*40+"%";

    star.style.left=(60+Math.random()*30)+"%";

    document.getElementById("background").appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2000);

}

setInterval(createShootingStar,12000);

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const caption = document.getElementById("lightbox-caption");

document.querySelectorAll(".clickable").forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=img.src;

        caption.textContent=img.dataset.story;

    });

});

document.getElementById("close").onclick=()=>{

    lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

};
function createParticle(){

    const particle = document.createElement("div");

    particle.className = "floating-particle";

    // About 1 in 12 particles becomes a heart
    if(Math.random() < 0.08){

        particle.innerHTML = "❤";
        particle.classList.add("heart-particle");

    }else{

        particle.innerHTML = "✦";

    }

    particle.style.left = Math.random() * window.innerWidth + "px";

    particle.style.fontSize =
        (10 + Math.random()*8) + "px";

    particle.style.animationDuration =
        (10 + Math.random()*6) + "s";

    document.body.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },16000);

}
let heartInterval;

envelope.addEventListener("click", ()=>{

    letter.classList.add("show");

    heartInterval = setInterval(createParticle,1200);

});
letter.addEventListener("click",(e)=>{

    if(e.target === letter){

        letter.classList.remove("show");

        clearInterval(heartInterval);

    }

});
const restartButton = document.querySelector(".restart");

restartButton.addEventListener("click", () => {

    // Stop any floating hearts
    clearInterval(heartInterval);

    // Close the letter
    letter.classList.remove("show");

    // Go back to the beginning
    currentPage = 0;
    showPage(currentPage);

    // Scroll the letter back to the top
    letter.scrollTop = 0;

});


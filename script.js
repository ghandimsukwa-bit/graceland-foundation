/*================================
    GRACELAND FOUNDATION
    WEBSITE JAVASCRIPT
================================*/


// Sticky Navigation On Scroll

const header = document.querySelector("header");


window.addEventListener("scroll", () => {


    if(window.scrollY > 100){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }


});





// Smooth Scrolling For Links

document.querySelectorAll('a[href^="#"]').forEach(link => {


    link.addEventListener("click", function(e){


        const target = document.querySelector(this.getAttribute("href"));


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});






// Reveal Animation When Scrolling


const revealElements = document.querySelectorAll(

".focus-card, .news-card, .mv-card, .impact-grid div"

);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){

        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0)";

    }


});


},{

threshold:0.15

});




revealElements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform="translateY(40px)";

    element.style.transition="0.8s ease";


    observer.observe(element);


});
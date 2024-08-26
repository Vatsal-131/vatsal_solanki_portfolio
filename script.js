let intro = document.querySelector('.intro');
let logo = document.querySelector('.name-header');
let logoSpan = document.querySelectorAll('.name');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
        setTimeout(()=>{
            span.classList.add('active');
        }, (idx + 1) * 400)
        });

        setTimeout(()=>{
           logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, ( idx + 1) * 50)
        })
    },2000);

    setTimeout(()=>{
        intro.style.top ='-100vh';
    }, 2300)
})

})


function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
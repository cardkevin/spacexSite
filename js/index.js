const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle(){
    btn.classList.toggle("open");
    overlay.classList.toggle("overlay-show");
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu')


}

function scrollPage() {
    const scrollPos = window.scrollY;

    // console.log(scrollPos);
    if(scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if(scrollPos < 100 && scrollStarted){
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach((arg) => {
        // console.log(arg);
        arg.innerText = '0';
        
        const updateCounter = () => {
            // getAttribute returns a string. To make this function work we need to convert the string into a num type
            // to convert we can add "+" sign.
            const target = +arg.getAttribute('data-target');

            const c = +arg.innerText;

            const increment = target/100;

            // if counter is less than the target, increment
            if(c < target) {
                // round up
                arg.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 25);
            } else {
                arg.innerText = target;
            }
            // console.log(target); 
        }

        updateCounter(); 
    });
}

function reset(){
    counters.forEach((arg) => arg.innerText = '0');
}

// the code below was my previous attempt; the code above is cleaner

// const hamburgerMenu = document.getElementById("menu-btn");
// console.log(hamburgerMenu)

// hamburgerMenu.addEventListener("click", menuState);

// function menuState(){
//     console.log("OPEN")
//     if(hamburgerMenu.classList.contains("open")) {
//         console.log("STATE1")
//         hamburgerMenu.classList.remove("open");
//     }
//     else {
//         console.log("STATE2")
//         hamburgerMenu.classList.add("open");
//     }
// }

// console.log(hamburgerMenu)
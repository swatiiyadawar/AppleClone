
    gsap.from(".headline", { 
        opacity: 0, 
        x: -50, 
        duration: 1,
        delay: 0.5 
    });

    gsap.from(".subhead", { 
        opacity: 0, 
        x: 100, 
        duration: 2,
        delay: 0.2
    });

    // Function to animate the dropdown
    function animateDropdown(dropdownContent) {
        gsap.to(dropdownContent, {
            duration: 0.3,
            opacity: 1,
            height: "auto",
            display: "block"
        });
    }

    // Function to close the dropdown
    // const select = document.getElementById("basic-select");
    // const menu = document.getElementById("option-select");
    // const dropdowns = document.querySelectorAll(".dropdown");
    // const cart = document.querySelector(".carpet");
    // const options = document.querySelectorAll(".options .options__item");
    // const selected = document.getElementById("select-title");
    // var active = document.querySelector(".options__item--active");
    // const animTime = 120;
    
    // select.addEventListener('mouseenter', function(){
    //   select.classList.add("selected--open");
    //   cart.classList.add("carpet--open");
    //   setTimeout(function(){
    //     select.classList.add("selected--delay");
    //   }, animTime);
    // })
    // select.addEventListener('mouseleave', function(){
    //   select.classList.remove("selected--open");
    //   cart.classList.remove("carpet--open");
    //   setTimeout(function(){
    //     select.classList.remove("selected--delay");
    //   }, animTime);
    // })
    // menu.addEventListener('mouseenter', function(){
    //   select.classList.add("selected--open");
    //   cart.classList.add("carpet--open");
    //   setTimeout(function(){
    //     select.classList.add("selected--delay");
    //   }, animTime);
    // })
    // menu.addEventListener('mouseleave', function(){
    //   select.classList.remove("selected--open");
    //   cart.classList.remove("carpet--open");
    //   setTimeout(function(){
    //     select.classList.remove("selected--delay");
    //   }, animTime);
    // })
    // options.forEach(option => {
    //   option.addEventListener("click", function(){
    //     selected.innerText = option.innerText;
    //     active.classList.remove("options__item--active");
    //     option.classList.add("options__item--active");
    //     active = document.querySelector(".options__item--active");
    //   });
    // });


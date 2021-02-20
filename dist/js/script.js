const toggleSwitch = document.querySelector(".checkbox");
const body = document.querySelector("body");


toggleSwitch.checked = true;


toggleSwitch.addEventListener("input", () => {

    if (toggleSwitch.checked === true) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        

    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        
    }
})


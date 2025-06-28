

let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");

btn.addEventListener("click", function() {
    btn.classList.add("active");
    btn1.classList.remove("active");
});

btn1.addEventListener("click", function() {
    btn1.classList.add("active");
    btn.classList.remove("active");
});




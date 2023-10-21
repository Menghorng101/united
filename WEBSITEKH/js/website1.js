const hambugarBtn = document.querySelector(".hambugar");
const menuBar = document.querySelector(".responsive-navbar");

hambugarBtn.addEventListener("click",function (){
    menuBar.classList.toggle("active");
});

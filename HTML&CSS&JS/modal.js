//button
const btnGoogle = document.querySelector("btn_google");
const btnCancle = document.querySelector("btn_cancle");
const btnComfirm = document.querySelector("btn_comfirm");

//modal
const modal = document.querySelector(".modal");

//overlay
const overlay = document.querySelector(".overlay"); 

//add event
btnGoogle.addEventListener("click", function(){
    modal.classList.add("active");
    overlay.classList.add("active");
});

btnClose.addEventListener("click", function(){
    modal.classList.remove("active");
    overlay.classList.remove("active");
});
let buguerButton = document.querySelector("#burguer-button");
buguerButton.addEventListener("click", ()=> {
    let menu = document.querySelector(".sections");
    menu.classList.toggle("unactive");
})
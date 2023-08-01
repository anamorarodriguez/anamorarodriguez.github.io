const headersecc = document.querySelector("#nav");
const botonabrir = document.querySelector("#abrir");
const botoncerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})



currentUrl = window.location.href
if (currentUrl.includes("conclusion.html")) {


    //Navegar a home
    let botonInicio = document.querySelector(".button_toHome")
    botonInicio.addEventListener("click", () => {
        window.location.href = "index.html"
    })
} else if (currentUrl.includes("sintesis.html")) {
    //Navegar a conclusion
    let botonConclusion = document.querySelectorAll(".button_conclusion")
    console.log(botonConclusion)
    for (let boton of botonConclusion) {
        boton.addEventListener("click", () => {
            window.location.href = "conclusion.html"
        })
    }
} else {
    // Navegar a Sintesis
    let botonSintesis = document.querySelector(".button_sintesis")

    botonSintesis.addEventListener("click", () => {
        window.location.href = "sintesis.html"
    })

}

// Navegar atras
function previous() {
    window.history.back();
}
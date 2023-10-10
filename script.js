currentUrl = window.location.href
if (currentUrl.includes("index.html")) {
    // Navegar a Sintesis
    let botonSintesis = document.querySelector("#button_sintesis")

    botonSintesis.addEventListener("click", () => {
        window.location.href = "sintesis.html"
    })
} else if (currentUrl.includes("sintesis.html")) {
    //Navegar a conclusion
    let botonConclusion = document.querySelector("#button_conclusion")

    botonConclusion.addEventListener("click", () => {
        window.location.href = "conclusion.html"
    })

} else {
    let botonInicio = document.querySelector("#button_toHome")
    botonInicio.addEventListener("click", () => {
        window.location.href = "index.html"
    })
}

// Navegar atras
function previous() {
    window.history.back();
} 

window.onload = function () {
    let cardCampo1 = document.getElementById("cardCampo1")
    let cardCampo2 = document.getElementById("cardCampo2")

    cardCampo1.addEventListener("click", abreCampo1)
    cardCampo2.addEventListener("click", abreCampo2)

    function abreCampo1 () {
        document.location.href = "./pages/campo1.html"
    }
    function abreCampo2 () {
        console.log("campo 2")
    }
}
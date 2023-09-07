window.onload = function () {
    let btnBack = document.getElementById("btnBack")
    let btnImgNaranja = document.getElementById("btnImgNaranja")
    let popupTemp = document.getElementById("popup")

    btnBack.addEventListener("click", fnVuelve)
    btnImgNaranja.addEventListener("click", fnPopup)

    function fnVuelve () {
        document.location.href = "../index.html"
    }
    function fnPopup () {
        popupTemp.classList.remove("oculto")
    }
}
window.onload = function () {
    let btnBack = document.getElementById("btnBack")

    btnBack.addEventListener("click", fnVuelve)

    function fnVuelve () {
        document.location.href = "../index.html"
    }
}
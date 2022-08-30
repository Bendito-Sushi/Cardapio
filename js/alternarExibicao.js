function alternarExibicao(obj, obj2) {
    const mudarPara = document.getElementById(obj).style.display === "block" ? "none" : "block"; // Verifica o status atual e inverte
    document.getElementById(obj).style.display = mudarPara
    const mudar = document.getElementById(obj2).textContent === "+" ? "-" : "+"; // Verifica o status atual do +/- e inverte
    document.getElementById(obj2).innerHTML = mudar
}


function ocultarTodos() { // objetivo da função é esconder todas as div's necessarias
    document.getElementById("container-entrada").style.display = "none"
    document.getElementById("container-makimonos").style.display = "none"
    document.getElementById("container-uramaki").style.display = "none"
    document.getElementById("container-niguiri").style.display = "none"
    document.getElementById("container-salmaoice").style.display = "none"
    document.getElementById("container-jowjow").style.display = "none"
    document.getElementById("container-sashimi").style.display = "none"
    document.getElementById("container-temaki").style.display = "none"
    document.getElementById("container-fritos").style.display = "none"
    document.getElementById("container-combos").style.display = "none"
    document.getElementById("container-yakisobas").style.display = "none"
    document.getElementById("container-harumakisdoces").style.display = "none"
    document.getElementById("container-bebidas").style.display = "none"
}

window.addEventListener("load", ocultarTodos) // Carrega a página chamando a função ocultarTodos
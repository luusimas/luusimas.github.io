// INDEX

document.addEventListener("DOMContentLoaded", function () {
    var carrossel = document.querySelector(".carrossel");
    var imagenscarrosel = document.querySelectorAll(".imagenscarrosel");
    var index = 0;

    function avancarImagem() {
        index = (index + 1) % imagenscarrosel.length;
        mostrarImagem();
    }

    function mostrarImagem() {
        carrossel.style.transform = "translateX(" + -index * 100 + "%)";
    }

    setInterval(avancarImagem, 3000); // Muda a cada 3 segundos (3000 milissegundos)
});

// Função para mostrar/ocultar a barra de navegação
function toggleNavbar() {
    var navbar = document.querySelector(".navbar500px");
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
}

// CULTURA

// CIDADANIA

// CELEBRAÇÕES

// INFLUÊNCIAS
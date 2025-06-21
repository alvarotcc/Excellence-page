// Função para abrir o modal
function openModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
}

// Quando o usuário clicar fora da imagem/modal, fechar o modal
window.onclick = function(event) {
    // Verifica se o clique foi fora da área do modal
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
};

// Fechar o modal quando o botão de fechar for clicado
var closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var modal = this.closest('.modal');
        modal.style.display = 'none';
    });
});

// Toggle menu mobile
document.getElementById("menu-icon").addEventListener("click", function() {
    var menuItems = document.getElementById("menu-items");
    menuItems.classList.toggle("show");
    // Alterna a classe "active" para mostrar ou esconder o menu
    document.querySelector('nav').classList.toggle('active');
});

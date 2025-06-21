// Toggle menu mobile
document.getElementById("menu-icon").addEventListener("click", function() {
    var menuItems = document.getElementById("menu-items");
    menuItems.classList.toggle("show");
    // Alterna a classe "active" para mostrar ou esconder o menu
    document.querySelector('nav').classList.toggle('active');
});

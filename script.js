// Toggle menu mobile
document.getElementById("menu-icon").addEventListener("click", function() {
    var menuItems = document.getElementById("menu-items");
    menuItems.classList.toggle("show");
});

// Função para rodar os serviços automaticamente
let serviceIndex = 0;
const services = document.querySelectorAll('.service');

function changeService() {
    services[serviceIndex].classList.remove('active');
    serviceIndex = (serviceIndex + 1) % services.length;
    services[serviceIndex].classList.add('active');
}

// Inicializa o carrossel de serviços
setInterval(changeService, 3000); // Troca de serviço a cada 3 segundos

// Função para rodar os comentários automaticamente
let commentIndex = 0;
const comments = document.querySelectorAll('.comment');

function changeComment() {
    comments[commentIndex].classList.remove('active');
    commentIndex = (commentIndex + 1) % comments.length;
    comments[commentIndex].classList.add('active');
}

// Inicializa o carrossel de comentários
setInterval(changeComment, 3000); // Troca de comentário a cada 3 segundos

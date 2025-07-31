// Toggle menu mobile
document.getElementById("menu-icon").addEventListener("click", function() {
    var menuItems = document.getElementById("menu-items");
    menuItems.classList.toggle("show");
    // Alterna a classe "active" para mostrar ou esconder o menu
    document.querySelector('nav').classList.toggle('active');
});

// NOVO: Código para abrir imagem em tamanho grande ao clicar

const overlay = document.getElementById('overlay');
const overlayImage = overlay.querySelector('img');
const closeBtn = document.getElementById('close-overlay');

document.querySelectorAll('.foto-item img').forEach(img => {
    img.addEventListener('click', () => {
        overlayImage.src = img.src;
        overlayImage.alt = img.alt;
        overlay.style.display = 'flex';
        // Opcional: bloquear scroll quando o overlay estiver aberto
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    overlayImage.src = '';
    // Reativar scroll
    document.body.style.overflow = '';
});

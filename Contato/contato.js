// Função para ativar/desativar o menu no mobile
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Botão WhatsApp
document.getElementById('whatsapp-btn').addEventListener('click', function() {
    window.location.href = "https://wa.me/5599999999999"; // Substitua pelo número de WhatsApp da empresa
});

// Botão Fale Conosco
document.getElementById('fale-conosco-btn').addEventListener('click', function() {
    var formContainer = document.getElementById('form-container');
    
    // Alterna entre mostrar e esconder o formulário
    if (formContainer.style.display === 'block') {
        formContainer.style.display = 'none'; // Esconde o formulário
    } else {
        formContainer.style.display = 'block'; // Exibe o formulário
    }
});

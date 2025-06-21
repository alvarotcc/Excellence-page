<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // Define o destinatário do e-mail (seu e-mail)
    $para = "alvarotcc01@gmail.com"; // Substitua com seu e-mail
    $assunto = "Nova mensagem de contato - Kron Studio";

    // Cria o conteúdo do e-mail
    $conteudo = "Nome: $nome\n";
    $conteudo .= "Telefone: $telefone\n";
    $conteudo .= "E-mail: $email\n";
    $conteudo .= "Mensagem:\n$mensagem\n";

    // Cabeçalhos do e-mail
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Envia o e-mail
    if (mail($para, $assunto, $conteudo, $headers)) {
        // Redireciona para uma página de sucesso
        header("Location: sucesso.html"); // Crie uma página de sucesso (opcional)
        exit;
    } else {
        // Exibe erro caso o envio falhe
        echo "Falha no envio da mensagem.";
    }
}
?>

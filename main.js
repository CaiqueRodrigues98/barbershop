function enviarMensagem(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const nome = document.getElementById("nome").value; 
    const mensagem = document.getElementById("mensagem").value;
    const telefone = '5511999999999'; // Substitua pelo número de telefone desejado (com DDD e sem espaços ou caracteres especiais)

    const texto = `Olá! Meu nome é ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`;

    window.open(url, '_blank');
}
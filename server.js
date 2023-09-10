// Importando o módulo HTTP
const http = require('http');

// Configurando o servidor HTTP para responder a solicitações
const server = http.createServer((req, res) => {
  // Defina o cabeçalho da resposta HTTP com o código de status 200 (OK) e o tipo de conteúdo como texto simples
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Escreva uma mensagem de resposta
  res.end('Olá, mundo!\n');
});

// Definindo a porta e o endereço IP em que o servidor deve ouvir
const porta = 3000;
const enderecoIP = '127.0.0.1';

// Iniciando o servidor e fazendo-o escutar na porta e endereço IP especificados
server.listen(porta, enderecoIP, () => {
  console.log(`Servidor rodando em http://${enderecoIP}:${porta}/`);
});

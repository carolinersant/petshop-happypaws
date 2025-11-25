// =======================================================
// 1. FUNÇÃO TEMPORAL: Exibir data e hora dinamicamente
// =======================================================
function atualizarHora() {
    // Cria um novo objeto Date
    const agora = new Date();

    // Opções de formatação para a data e hora
    const opcoes = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Formato 24h
    };

    // Formata a data e hora
    const dataHoraFormatada = agora.toLocaleDateString('pt-BR', opcoes);

    // Atualiza o conteúdo do elemento HTML
    const elementoHora = document.getElementById('horaAtual');
    if (elementoHora) {
        elementoHora.textContent = dataHoraFormatada;
    }
}

// Chama a função imediatamente para carregar a hora ao iniciar
atualizarHora();

// Configura a função para ser chamada a cada 1 segundo (função temporal)
setInterval(atualizarHora, 1000);


// =======================================================
// 2. VALIDAÇÃO DE FORMULÁRIO (Usando a validação nativa do Bootstrap)
// =======================================================
(function () {
  'use strict'

  // Busca o formulário que queremos validar
  const form = document.getElementById('cadastroForm');
  
  // Adiciona um listener para o evento de submit
  if (form) {
    form.addEventListener('submit', function (event) {
        
      // Verifica se o formulário é válido (inclui campos required, email, number min/max)
      if (!form.checkValidity()) {
        event.preventDefault(); // Impede o envio do formulário
        event.stopPropagation(); // Impede a propagação do evento
        
        // Exibe um alerta simples em JavaScript para reforçar a interatividade
        alert('Por favor, preencha todos os campos obrigatórios corretamente para continuar com o agendamento.');
        
      } else {
          // Se o formulário for válido, exibe uma mensagem de sucesso
          alert('Cadastro e Agendamento enviados com sucesso! Entraremos em contato em breve.');
          // Neste ponto, você enviaria os dados para um servidor (Backend)
      }

      // Adiciona a classe de validação do Bootstrap para mostrar o feedback visual
      form.classList.add('was-validated');
    }, false);
  }
})()
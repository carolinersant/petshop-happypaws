// =======================================================
// 1. EXIBIR DATA E HORA ATUAL
// =======================================================
function atualizarHora() {
    const agora = new Date();

    const opcoes = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const dataHoraFormatada = agora.toLocaleDateString('pt-BR', opcoes);

    const elementoHora = document.getElementById('horaAtual');
    if (elementoHora) {
        elementoHora.textContent = dataHoraFormatada;
    }
}

atualizarHora();
setInterval(atualizarHora, 1000);


// =======================================================
// 2. POPULAR HORÁRIOS — APENAS 09:00 A 21:00
// =======================================================
function carregarHorarios() {
    const select = document.getElementById("horaAgendamento");
    if (!select) return;

    select.innerHTML = ""; // limpar as opções

    for (let h = 9; h <= 21; h++) {
        let horaFormatada = String(h).padStart(2, '0') + ":00";
        let option = document.createElement("option");

        option.value = horaFormatada;
        option.textContent = horaFormatada;

        select.appendChild(option);
    }
}

carregarHorarios();


// =======================================================
// 3. VALIDAÇÃO COMPLETA DO FORMULÁRIO
// =======================================================
(function () {
    'use strict';

    const form = document.getElementById('cadastroForm');

    if (!form) return;

    form.addEventListener('submit', function (event) {

        // 3.1 VALIDAR CPF — exatamente 11 números
        const cpfInput = document.getElementById('cpfCliente');
        if (cpfInput) {
            const cpf = cpfInput.value.replace(/\D/g, "");
            if (cpf.length !== 11) {
                event.preventDefault();
                event.stopPropagation();
                alert("Digite um CPF válido com 11 números.");
                return;
            }
        }

        // 3.2 VALIDAR EMAIL
        const emailInput = document.getElementById('emailCliente');
        if (emailInput) {
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                event.preventDefault();
                event.stopPropagation();
                alert("Digite um e-mail válido.");
                return;
            }
        }

        // 3.3 VALIDAR HORÁRIO SELECIONADO
        const hora = document.getElementById("horaAgendamento").value;
        if (!hora || Number(hora.split(":")[0]) < 9 || Number(hora.split(":")[0]) > 21) {
            event.preventDefault();
            event.stopPropagation();
            alert("Escolha um horário válido entre 09:00 e 21:00.");
            return;
        }

        // 3.4 VALIDAÇÃO PADRÃO DO BOOTSTRAP
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            alert("Preencha todos os campos obrigatórios.");
        } else {
            alert("Cadastro e agendamento enviados com sucesso!");
        }

        form.classList.add('was-validated');
    });
})();

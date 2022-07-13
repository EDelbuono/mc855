export const steps=[
    {
        id: '1',
        message: 'Olá! Boas vindas ao LocalizaHC! Nosso objetivo é te direcionar sobre o que você deve fazer no Ambulatório de Pediatria do HC da Unicamp.',
        trigger: '2',
    },
    {
        id: '2',
        message: 'Primeiro de tudo, me conta: qual o seu nome completo?',
        trigger: '3',
    },
    {
        id: '3',
        user: true,
        trigger: '4',
    },
    {
        id: '4',
        message: 'Oi, {previousValue}! É um prazer ter você com a gente! Agora me diz: você já é cliente do HC?',
        trigger: '5',
    },
    {
        id: '5',
        options: [
        { value: 1, label: 'Sim', trigger: '5.1'},
        { value: 2, label: 'Não', trigger: '5.2'},
        ],
    },
    {
        id: '5.1',
        message: 'Nesse caso, o que você veio fazer aqui hoje?',
        trigger: '6.1',
    },
    {
        id: '5.2',
        message: 'Nesse caso, se dirija à faixa amarela à sua esquerda para que seu nome conste no sistema e possamos pedir exames e anotar sua consulta.',
        trigger: '6.2',
    },
    {
        id: '6.1',
        options: [
        { value: 1, label: 'Consulta', trigger: '7.1.1'},
        { value: 2, label: 'Pedir remarcação de consulta, relatório, receita ou fazer uma pergunta', trigger: '7.1.2'},
        { value: 3, label: 'Receber medicamento, fazer um teste, curativo ou outro procedimento', trigger: '7.1.3'},
        { value: 4, label: 'Respondi errado. Voltar para a tela anterior', trigger: '7.1.4'},
        ],
    },
    {
        id: '6.2',
        message: 'Você receberá uma pasta com seu nome e um número para nos trazer.',
        trigger: '7.2',
    },
    {
        id: '7.1.1',
        message: 'Esta consulta está agendada?',
        trigger: '8.1.1',
    },
    {
        id: '7.1.2',
        message: 'Nesse caso, por favor se dirija à sala 23 a sua direita e aguarde, que em breve te atenderemos.',
        trigger: '8.1.2',
    },
    {
        id: '7.1.3',
        message: 'Digite seu HC:',
        trigger: '8.1.3',
    },
    {
        id: '7.1.4',
        message: 'Sem problemas, vamos de novo! Você já é cliente do HC?',
        trigger: '5',
    },
    {
        id: '7.2',
        options: [
        { value: 1, label: 'Entendido, voltar para a tela inicial', end: true},
        { value: 2, label: 'Respondi errado. Voltar para a tela anterior', trigger: '7.1.4'}, 
        ],
    },
    {
        id: '8.1.1',
        options: [
        { value: 1, label: 'Sim', trigger: '9.1.1.1'},
        { value: 2, label: 'Não, mas recebi o e-mail de encaixe', trigger: '9.1.1.2'},
        { value: 3, label: 'Não, mas gostaria/preciso passar pelo atendimento hoje', trigger: '9.1.1.3'},
        { value: 4, label: 'Respondi errado. Voltar para a tela anterior', trigger: '9.1.1.4'},
        ],
    },
    {
        id: '8.1.2',
        message: 'O Ambulatório de Pediatria agradece sua colaboração!',
        trigger: '9.1.2',
    },
    {
        id: '8.1.3',
        user: true,
        trigger: '9.1.3',
    },
    {
        id: '9.1.1.1',
        message: 'Qual a especialidade do seu atendimento?',
        trigger: '10.1.1.1',
    },
    {
        id: '9.1.1.2',
        message: 'Por favor, se dirija à faixa amarela à sua esquerda para que seu nome conste no sistema e possamos pedir exames e anotar sua consulta.',
        trigger: '10.1.1.2',
    },
    {
        id: '9.1.1.3',
        message: 'Nesse caso, por favor se dirija à sala 23 a sua direita e aguarde, que em breve te atenderemos.',
        trigger: '10.1.1.3',
    },
    {
        id: '9.1.1.4',
        message: 'Sem problemas, vamos de novo! Esta consulta está agendada?',
        trigger: '8.1.1',
    },
    {
        id: '9.1.2',
        options: [
        { value: 1, label: 'Entendido. Voltar para a tela inicial', end: true},
        { value: 2, label: 'Respondi errado. Voltar para a tela anterior', trigger: '10.1.2'}, 
        ],
    },
    {
        id: '9.1.3',
        message: 'Aguarde, em breve te atenderemos.',
        trigger: '10.1.3',
    },
    {
        id: '10.1.1.1',
        options: [
            { value: 1, label: 'Alergia e Imunologia Ped', trigger: '11.1.1.1'},
            { value: 2, label: 'Endocrinologia Ped', trigger: '11.1.1.1'},
            { value: 3, label: 'Gastroenterologia Ped/Hepatologia I (Gastrocentro)', trigger: '11.1.1.1'},
            { value: 4, label: 'Reumatologia Ped', trigger: '11.1.1.1'},
            { value: 5, label: 'Outro', trigger: '11.1.1.2'},
            { value: 6, label: 'Respondi errado. Voltar para a tela anterior.', trigger: '11.1.1.3'},
            ],
    },
    {
        id: '10.1.1.2',
        message: 'Quando fizer isso, clique no primeiro botão abaixo.',
        trigger: '11.1.2.2',
    },
    {
        id: '10.1.1.3',
        message: 'O Ambulatório de Pediatria agradece sua colaboração!',
        trigger: '11.1.3',
    },
    {
        id: '10.1.2',
        message: 'Sem problemas, vamos de novo! O que você veio fazer aqui hoje?',
        trigger: '6.1',
    },
    {
        id: '10.1.3',
        message: 'O Ambulatório de Pediatria agradece sua colaboração!',
        trigger: '11.1.3.1',
    },
    {
        id: '11.1.1.1',
        message: 'Digite seu HC:',
        trigger: '12.1.1.1',
    },
    {
        id: '11.1.1.2',
        message: 'Nesse caso, a especialidade que você busca não tem profissionais atendendo nesse período. Para ver a lista de especialidades atendidas em cada dia e período, acesse <link>',
        trigger: '12.1.1.2',
    },
    {
        id: '11.1.2.2',
        options: [
            { value: 1, label: 'Feito! Ir para o próximo passo.', trigger: '9.1.1.1'},
            { value: 2, label: 'Respondi errado. Voltar para a tela anterior', trigger: '9.1.1.4'}, 
            ],
    },
    {
        id: '11.1.1.3',
        message: 'Sem problemas, vamos de novo! Esta consulta está agendada?',
        trigger: '8.1.1',
    },
    {
        id: '11.1.3',
        options: [
            { value: 1, label: 'Entendido. Voltar para a tela inicial', end: true},
            { value: 2, label: 'Respondi errado. Voltar para a tela anterior', trigger: '11.1.1.3'}, 
            ],
    },
    {
        id: '11.1.3.1',
        options: [
        { value: 1, label: 'Entendido. Voltar para a tela inicial', end: true},
        { value: 2, label: 'Respondi errado. Voltar para a tela anterior', trigger: '10.1.2'}, 
        ],
    },
    {
        id: '12.1.1.1',
        user: true,
        trigger: '13.1.1.1',
    },
    {
        id: '12.1.1.2',
        options: [
        { value: 1, label: 'Entendido. Voltar para a tela inicial', end: true},
        { value: 2, label: 'Respondi errado. Voltar para a tela anterior', trigger: '17.1.1.1'}, 
        ],
    },
    {
        id: '13.1.1.1',
        message: 'Você já está na fila e sua senha é <XX>. Sua senha e a sala onde acontecerá sua consulta aparecerão na Tela da TV acima da porta do ambulatório quando chegar sua vez.',
        trigger: '14.1.1.1',
    },
    {
        id: '14.1.1.1',
        message: 'Aguarde, em breve te atenderemos.',
        trigger: '15.1.1.1',
    },
    {
        id: '15.1.1.1',
        message: 'O Ambulatório de Pediatria agradece sua colaboração!',
        trigger: '16.1.1.1',
    },
    {
        id: '16.1.1.1',
        options: [
        { value: 1, label: 'Entendido. Aguardar.', end: true},
        { value: 2, label: 'Respondi errado. Sair da fila e voltar para a tela anterior.', trigger: '17.1.1.1'}, 
        ],
    },
    {
        id: '17.1.1.1',
        message: 'Sem problemas, vamos de novo! Qual a especialidade do seu atendimento?',
        trigger: '10.1.1.1',
    },
    ]
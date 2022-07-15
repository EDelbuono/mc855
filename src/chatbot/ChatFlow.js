import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

var numero_hc;

export class Review extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        nome: '',
        numero_hc: '',
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { nome, numero_hc } = steps;
  
      this.setState({ nome });
    }
  
    render() {
      const { nome, numero_hc } = this.state;
      return <div>Opções:</div>;
    }
  }
  
  Review.propTypes = {
    steps: PropTypes.object,
  };
  
  Review.defaultProps = {
    steps: undefined,
  };

export const steps=[
    {
        id: '1',
        message: 'Olá! Boas vindas ao LocalizaHC! Nosso objetivo é te direcionar sobre o que você deve fazer no Ambulatório de Pediatria do HC da Unicamp.',
        trigger: '2',
    },
    {
        id: '2',
        message: 'Primeiro de tudo, me conta: qual o seu nome completo?',
        trigger: 'nome',
    },
    {
        id: 'nome',
        user: true,
        trigger: '4',
        validator: value => {
            let pattern = /^[-a-zA-Z'áàâãéèêíïóôõöúçñ ]+$/;
            if(pattern.test(value)){
                return true;
            }
            else
                return 'Nome inválido. Números não são aceitos.'
        }
    },
    {
        id: '4',
        message: 'Oi, {previousValue}! É um prazer ter você com a gente! Agora me diz: você já é cliente do HC?',
        trigger: v => {
            //alert(nome);
            return 'review'
        },
    },
    {
        id: 'review',
        component: <Review />,
        asMessage: true,
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
        { value: 4, label: 'Respondi errado. Voltar para a tela anterior', trigger: '5.1'},
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
        validator: value => {
            let pattern = /^[0-9 ]+$/;
            if(pattern.test(value)){
                numero_hc = value;
                return true;
            }
            else
                return 'Só são aceitos dígitos.'
        }
    },
    {
        id: '9.1.1.1',
        message: resp => {
            const d = new Date();
            let hour = d.getHours();
            let day = d.getDay();
            
            const msg = ' Qual a especialidade do seu atendimento?';
            if(day===1){
                if(hour<11 && hour>18)
                    return 'Exibindo especialidades disponíveis de Segunda de Manhã.' + msg;
                else
                    return 'Exibindo especialidades disponíveis de Segunda de Tarde.' + msg;
            } else if(day===2){
                if(hour<11 && hour>18)
                    return 'Exibindo especialidades disponíveis de Terça de Manhã.' + msg;
                else
                    return 'Exibindo especialidades disponíveis de Terça de Tarde.' + msg;
            } else if(day===3){
                if(hour<11 && hour>18)
                    return 'Exibindo especialidades disponíveis de Quarta de Manhã.' + msg;
                else
                    return 'Exibindo especialidades disponíveis de Quarta de Tarde.' + msg;
            } else if(day===4){
                if(hour<11 && hour>18)
                    return 'Exibindo especialidades disponíveis de Quinta de Manhã.' + msg;
                else
                    return 'Exibindo especialidades disponíveis de Quinta de Tarde.' + msg;
            } else if(day===5){
                if(hour<11 && hour>18)
                    return 'Exibindo especialidades disponíveis de Sexta de Manhã.' + msg;
                else
                    return 'Exibindo especialidades disponíveis de Sexta de Tarde.' + msg;
            } 

            return 'Exibindo especialidades disponíveis de Segunda de Manhã.' + msg;
        },
        trigger: id_resp => {
            const d = new Date();
            let hour = d.getHours();
            let day = d.getDay();
            
            if(day===1){
                if(hour<11)
                    return '10.1.1.1-seg-man'
                else if(hour<18 )
                    return '10.1.1.1-seg-tar'
                else 
                    return '10.1.1.1-ter-man'
            } else if(day===2){
                if(hour<11 && hour>18)
                    return '10.1.1.1-ter-man'
                else if(hour<18 )
                    return '10.1.1.1-ter-tar'
                else return '10.1.1.1-qua-man'
            } else if(day===3){
                if(hour<11 && hour>18)
                    return '10.1.1.1-qua-man'
                else if(hour<18 )
                    return '10.1.1.1-qua-tar'
                else return '10.1.1.1-qui-man'
            } else if(day===4){
                if(hour<11 && hour>18)
                    return '10.1.1.1-qui-man'
                else if(hour<18 )
                    return '10.1.1.1-qui-tar'
                else return '10.1.1.1-sex-man'
            } else if(day===5){
                if(hour<11 && hour>18)
                    return '10.1.1.1-sex-man'
                else if(hour<18 )
                    return '10.1.1.1-sex-tar'
            } 

            return '10.1.1.1'
        },
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
        message: 'Infelizmente não temos horário de atendimento de fim de semana. Nós trabalhamos de segunda a quinta das 7h - 17h.',
        end: true,
    },
    // {
    //     id: '10.1.1.1-opcoes',
    //     message: 'Selecione qual o período disponível para você:',
    //     options: opt => {
    //         disponivel = false;
    //         return [
    //         { value: 1, label: 'Segunda-Feira de Manhã', trigger: '10.1.1.1-seg-man'},
    //         { value: 2, label: 'Segunda-Feira de Tarde', trigger: '10.1.1.1-seg-tar'},
    //         { value: 3, label: 'Terça-Feira de Manhã', trigger: '10.1.1.1-ter-man'},
    //         { value: 4, label: 'Terça-Feira de Tarde', trigger: '10.1.1.1-ter-tar'},
    //         { value: 5, label: 'Quarta-Feira de Manhã', trigger: '10.1.1.1-qua-man'},
    //         { value: 6, label: 'Quarta-Feira de Tarde', trigger: '10.1.1.1-qua-tar'},
    //         { value: 7, label: 'Quinta-Feira de Manhã', trigger: '10.1.1.1-qui-man'},
    //         { value: 8, label: 'Quinta-Feira de Tarde', trigger: '10.1.1.1-qui-tar'},
    //         { value: 9, label: 'Sexta-Feira de Manhã', trigger: '10.1.1.1-sex-man'},
    //         { value: 10, label: 'Sexta-Feira de Tarde', trigger: '10.1.1.1-sex-tar'},
    //         { value: 11, label: 'Respondi errado. Voltar para a tela anterior.', trigger: '11.1.1.3'},
    //         ]},
    // },
    {
        id: '10.1.1.1-seg-man',
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
        id: '10.1.1.1-seg-tar',
        options: [
            { value: 1, label: 'Medicina do Adolescente', trigger: '11.1.1.1'},
            { value: 2, label: 'Violência Contra Criança e Adolescente', trigger: '11.1.1.1'},
            { value: 3, label: 'Hipotiroidismo Cong I', trigger: '11.1.1.1'},
            { value: 4, label: 'Obesidade', trigger: '11.1.1.1'},
            { value: 5, label: 'Pneumologia PED', trigger: '11.1.1.1'},
            { value: 6, label: 'Outro', trigger: '11.1.1.2'},
            { value: 7, label: 'Respondi errado. Voltar para a tela anterior.', trigger: '11.1.1.3'},
            ],
    },
    {
        id: '10.1.1.1-ter-man',
        options: [
            { value: 1, label: 'Alergia e Imunologia Ped ', trigger: '11.1.1.1'},
            { value: 2, label: 'Crescimento', trigger: '11.1.1.1'},
            { value: 3, label: 'Gastropediatria', trigger: '11.1.1.1'},
            { value: 4, label: 'Pneumologia Ped', trigger: '11.1.1.1'},
            { value: 5, label: 'Reumatologia', trigger: '11.1.1.1'},
            { value: 6, label: 'Outro', trigger: '11.1.1.2'},
            { value: 7, label: 'Respondi errado. Voltar para a tela anterior.', trigger: '11.1.1.3'},
            ],
    },
    {
        id: '10.1.1.1-ter-tar',
        options: [
            { value: 1, label: 'Alergia e Imunologia Ped', trigger: '11.1.1.1'},
            { value: 2, label: 'Crescimento', trigger: '11.1.1.1'},
            { value: 3, label: 'Mucoviscidose', trigger: '11.1.1.1'},
            { value: 4, label: 'Infectologia Pediátrica', trigger: '11.1.1.1'},
            { value: 5, label: 'Cirurgia Pediátrica', trigger: '11.1.1.1'},
            { value: 6, label: 'Genética', trigger: '11.1.1.1'},
            { value: 7, label: 'Outro', trigger: '11.1.1.2'},
            { value: 8, label: 'Respondi errado. Voltar para a tela anterior.', trigger: '11.1.1.3'},
            ],
    },
    {
        id: '10.1.1.1-qua-man',
        options: [
            { value: 1, label: 'Cardiologia Ped', trigger: '11.1.1.1'},
            { value: 2, label: 'Triagem Neonatal', trigger: '11.1.1.1'},
            { value: 3, label: 'Hipotiroidismo Cong I', trigger: '11.1.1.1'},
            { value: 4, label: 'Reumatologia', trigger: '11.1.1.1'},
            { value: 5, label: 'Genética', trigger: '11.1.1.1'},
            { value: 6, label: 'Outro', trigger: '11.1.1.2'},
            { value: 7, label: 'Respondi errado. Voltar para a tela anterior.', trigger: '11.1.1.3'},
            ],
    },
    {
        id: '10.1.1.1-qua-tar',
        options: [
            { value: 1, label: 'Alergia e Imunologia Ped', trigger: '11.1.1.1'},
            { value: 2, label: 'Cardiologia Ped', trigger: '11.1.1.1'},
            { value: 3, label: 'Diabetes FC', trigger: '11.1.1.1'},
            { value: 4, label: 'Triagem Neonatal', trigger: '11.1.1.1'},
            { value: 5, label: 'Obesidade', trigger: '11.1.1.1'},
            { value: 6, label: 'Reumatologia', trigger: '11.1.1.1'},
            { value: 7, label: 'Genética', trigger: '11.1.1.1'},
            { value: 8, label: 'Outro', trigger: '11.1.1.2'},
            { value: 9, label: 'Respondi errado. Voltar para a tela anterior.', trigger: '11.1.1.3'},
            ],
    },
    {
              
        id: '10.1.1.1-qui-man',
        options: [
            { value: 1, label: 'Alergia e Imunologia Ped', trigger: '11.1.1.1'},
            { value: 2, label: 'Endocrinologia Ped', trigger: '11.1.1.1'},
            { value: 3, label: 'Gastropediatria', trigger: '11.1.1.1'},
            { value: 4, label: 'Reumatologia', trigger: '11.1.1.1'},
            { value: 5, label: 'Outro', trigger: '11.1.1.2'},
            { value: 6, label: 'Respondi errado. Voltar para a tela anterior.', trigger: '11.1.1.3'},
            ],
    },
    {
        id: '10.1.1.1-qui-tar',
        options: [
            { value: 1, label: 'Ambulatório de Entrada/ Pediatria Integração', trigger: '11.1.1.1'},
            { value: 2, label: 'Endocrinologia Ped', trigger: '11.1.1.1'},
            { value: 3, label: 'Reumatologia', trigger: '11.1.1.1'},
            { value: 4, label: 'Genética', trigger: '11.1.1.1'},
            { value: 5, label: 'Outro', trigger: '11.1.1.2'},
            { value: 6, label: 'Respondi errado. Voltar para a tela anterior.', trigger: '11.1.1.3'},
            ],
    },
    {
        id: '10.1.1.1-sex-man',
        options: [
                 
            { value: 1, label: 'Alergia e Imunologia Ped', trigger: '11.1.1.1'},
            { value: 2, label: 'Endocrinologia Ped', trigger: '11.1.1.1'},
            { value: 3, label: 'Pediatria Integração', trigger: '11.1.1.1'},
            { value: 4, label: 'Pneumologia PED', trigger: '11.1.1.1'},
            { value: 5, label: 'Outro', trigger: '11.1.1.2'},
            { value: 6, label: 'Respondi errado. Voltar para a tela anterior.', trigger: '11.1.1.3'},
            ],
    },
    {
        id: '10.1.1.1-sex-tar',
        options: [
            { value: 1, label: 'Medicina do Adolescente', trigger: '11.1.1.1'},
            { value: 2, label: 'Cardiologia Ped', trigger: '11.1.1.1'},
            { value: 3, label: 'Endocrinologia Ped', trigger: '11.1.1.1'},
            { value: 4, label: 'Gastroent erologia Ped', trigger: '11.1.1.1'},
            { value: 5, label: 'Triagem Mucoviscidose', trigger: '11.1.1.1'},
            { value: 6, label: 'Outro', trigger: '11.1.1.2'},
            { value: 7, label: 'Respondi errado. Voltar para a tela anterior.', trigger: '11.1.1.3'},
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
        message: 'Nesse caso, a especialidade que você busca não tem profissionais atendendo nesse período. Abaixo segue a lista de especialidades em cada período:',
        trigger: '11.1.1.2.1',
    },
    {
        id: '11.1.1.2.1',
        // eslint-disable-next-line no-multi-str
        message: "Segunda-Feira de Manhã: Alergia e Imunologia Ped Endocrinologia Ped  Gastroenterologia Ped/Hepatologia I (Gastrocentro )  Reumatologia Ped \
        Segunda-Feira de Tarde: Medicina do Adolescente Violência Contra Criança e Adolescente Hipotireoidismo Cong I Obesidade  Pneumologia PED \
        Terça-Feira de Manhã: Alergia e Imunologia Ped Crescimento Gastropediatria  Pneumologia Ped  Reumatologia  \n\
        Terça-Feira de Tarde: Alergia e Imunologia Ped Crescimento  Mucoviscidose  Infectologia Pediátrica  Cirurgia Pediátrica  Genética  \
        Quarta-Feira de Manhã: Cardiologia Ped Triagem Neonatal Reumatologia Genética  \n\
        Quarta-Feira de Tarde: Alergia e Imunologia Ped Cardiologia Ped Diabetes FC  Triagem Neonatal  Obesidade  Reumatologia  Genética  \
        Quinta-Feira de Manhã: Alergia e Imunologia Ped Endocrinologia Ped  Gastropediatria  Reumatologia \
        Quinta-Feira de Tarde: Ambulatório de Entrada/ Pediatria Integração Endocrinologia Ped  Reumatologia  Genética \
        Sexta-Feira de Manhã: Alergia e Imunologia Ped Endocrinologia Ped  Pediatria Integração Pneumologia  \
        Sexta-Feira de Tarde: Medicina do Adolescente Cardiologia Ped Endocrinologia Ped Gastroenterologia Ped Triagem Mucoviscidose",
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
        validator: value => {
            let pattern = /^[0-9 ]+$/;
            if(pattern.test(value)){
                numero_hc = value;
                return true;
            }
            else
                return 'Só são aceitos dígitos.'
        }
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
        message: /* nome + */ ' HC: ' + numero_hc + ', você já está na fila e sua senha é <XX>. Sua senha e a sala onde acontecerá sua consulta aparecerão na Tela da TV acima da porta do ambulatório quando chegar sua vez.',
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
        message: 'Sem problemas, vamos de novo!',
        trigger: '9.1.1.1',
    },
    ]

export default Review;
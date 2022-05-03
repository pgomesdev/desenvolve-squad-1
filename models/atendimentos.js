
const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento, res) {
         
        const nomeEhValido = atendimento. nome.length >=15   
        const apelidoEhValido = atendimento.apelido.length >=15     
        const emailEhValido = atendimento.email.length >=15

         const usuario = atendimento.email.substring(0, atendimento.email.indexOf("@"));
         const dominio = atendimento.email.substring(atendimento.email.indexOf("@")+ 1, atendimento.email);

        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {

             console.log("E-mail valido");
                }
                else{

                console.log("E-mail invalido");
                }

        const telefoneEhValido = atendimento.telefone.length >=11 
        const empresaEhValido = atendimento.empresa.length >=15
        const senhaEhValido = atendimento.senha.length >=6
        
        const validacoes = [
            {
                nome: 'nome',
                valido: nomeEhValido,
                mensagem: 'nome deve possuir pelo menos dois nomes.'
            },

            {
                nome: 'apelido',
                valido: apelidoEhValido,
                mensagem: 'apelido deve ter pelo menos quinze caracteres'
            },

            {
                nome: 'email',
                valido: emailEhValido,
                mensagem: 'email deve ser formato válido'
            },

            {
                nome: 'telefone',
                valido: telefoneEhValido,
                mensagem: 'telefone  deve possuir no máximo onze caracteres'
            },

            {
                nome: 'empresa',
                valido: empresaEhValido,
                mensagem: 'nome da empresa deve possuir no máximo quinze caracteres'
            },

            {
                nome: 'senha',
                valido: senhaEhValido,
                mensagem: 'senha deve ter no mínimo 6 caracteres'
            }

        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros) {
            res.status(400).json(erros)
        } else {
            const atendimentoDatado = {...atendimento }

            const sql = 'INSERT INTO Atendimentos SET ?'
    
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
               
                if(erro) {

                    res.status(400).json(erro)

                } else {
                    res.status(201).json(atendimento)
                }
            })
        }
       
    }
}

module.exports = new Atendimento
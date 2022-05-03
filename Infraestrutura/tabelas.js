
class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarAtendimientos()
        
    }
    
    criarAtendimientos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, nome varchar(15) NOT NULL, apelido varchar(15), email varchar(15) NOT NULL, telefone varchar(15) NOT NULL,  empresa varchar(20) NOT NULL, senha varchar(6) NOT NULL, PRIMARY KEY(id,email))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas
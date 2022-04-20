module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('clientes', [
      {
        nome: 'Luiz Cardoso do Carmo',
        apelido: 'lu',
        email: 'luiz@gmp.com.br',
        telefone: 940637491,
        empresaQueTrabalha: 'Boticário',
        senha: 'wem3x',
        createdAt: new Date(),
				updatedAt: new Date()
    },
    {
        nome: 'Maria Eduarda Pereira',
        apelido: 'madu',
        email: 'madu@jpmx.com.br',
        telefone: 943590385,
        empresaQueTrabalha: 'Natura',
        senha: 'gt2#v2',
        createdAt: new Date(),
				updatedAt: new Date()
    },
    {
        nome: 'Pedro Lucas Andrade',
        apelido: 'peu',
        email: 'pedro.lu@houtb.com.br',
        telefone: 990398324,
        empresaQueTrabalha: 'Itau',
        senha: 'mgv6&_2vm',
        createdAt: new Date(),
				updatedAt: new Date()
    }
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('clientes', null, {})
  }
}

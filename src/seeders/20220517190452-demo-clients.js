'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Clients', [
      {
				name: 'Larissa Santos Oliveira',
				nickname: 'Lari',
				email: 'lari.so@email.com',
				phone:  979433682,
				companyThatWorks: 'AltTec',
				password: '43635hB9',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			
			{
				name: 'Pedro Arthur Mendes',
				nickname: 'Pe',
				email: 'pedro_arthur@email.com',
				phone:  982733643,
				companyThatWorks: 'InspiraTec',
				password: '$j2649G_',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			
			{
				name: 'Gabriella Gomes Martinez',
				nickname: 'Gabi',
				email: 'gabi_gm@email.com',
				phone:  47265321,
				companyThatWorks: 'Unique Solutions',
				password: 'Hudn6489@!',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			
			{
				name: 'Josue Pereira', 
				nickname: 'Ze',
				email: 'ze.pereira@email.com',
				phone:  55125112,
				companyThatWorks: 'R-solver',
				password: '@jdhdbLJ231',
				createdAt: new Date(),
				updatedAt: new Date()
			
			},
			
			{
				name: 'Amanda Nascimento', 
				nickname: 'Mandi',
				email: 'amanda_nas@email.com',
				phone:  982340769,
				companyThatWorks: 'GlobalLog',
				password: '9675nmIdeb%',
				createdAt: new Date(),
				updatedAt: new Date()
			
			},
			
			{
				name: 'Luiz Carlos Rodrigues',
				nickname: 'Lu',
				email: 'luiz.ro@email.com',
				phone:  975498269,
				companyThatWorks: 'Agius',
				password: '3%mV749.5G',
				createdAt: new Date(),
				updatedAt: new Date()
			}
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('Clients', null, {});
    
  }
};

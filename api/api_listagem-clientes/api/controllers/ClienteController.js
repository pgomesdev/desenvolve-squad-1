const database = require('../models')

class ClienteController {
    static async getAllClients(req, res) {
        try {
            const allClients = await database.Clientes.findAll({
                attributes: ['id', 'nome', 'email']
              });
            return res.status(200).json(allClients)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getOneClient(req, res) {
        const { id } = req.params
        try {
            const oneClient = await database.Clientes.findOne( {
                 where: {
                      id: Number(id) 
                }
            })
            return res.status(200).json(oneClient)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}



module.exports = ClienteController
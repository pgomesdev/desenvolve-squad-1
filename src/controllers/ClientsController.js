const database = require('../models')

class ClientController {
    static async getAllClients(req, res) {
        try {
            const allClients = await database.Clients.findAll({
                attributes: ['id', 'name', 'email'] }); 
            return res.status(200).json(allClients)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getOneClient(req, res) {
        const { id } = req.params
        try {
            const oneClient = await database.Clients.findOne({
                attributes: { exclude: ['password']}, 
                where: { id: Number(id) } })
            return res.status(200).json(oneClient)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ClientController



    
const { Router } = require('express')
const ClienteController = require('../controllers/ClienteController')

const router = Router() 

router.get('/clientes', ClienteController.getAllClients)
router.get('/clientes/:id', ClienteController.getOneClient)

module.exports = router
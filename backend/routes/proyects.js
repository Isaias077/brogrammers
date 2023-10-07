const getAllProyectController = require("../modules/proyect/useCase/getAllProyects/controller");

const express = require('express');
const router = express.Router();

router.get('/', getAllProyectController.exec)

module.exports = router;
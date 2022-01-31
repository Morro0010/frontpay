const router = require("express").Router();

const Micro = require('./Micro')
const Medio = require('./Medio').router
const Basico = require('./Basico').router
const Extra = require('./Extra')
const Avanzado = require('./Avanzado').router
const acabado = require('./TimeOver')

router.use('/micro', Micro)
router.use('/medio', Medio)
router.use('/basico', Basico)
router.use('/extra', Extra)
router.use('/avanzado', Avanzado)
router.use('/timeover', acabado)

module.exports = router

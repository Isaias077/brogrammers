const GetAllProyectUC = require('../getAllProyect.uc');

class GetAllProyectCtrl {
    async exec(req, res) {
        const GetAllProyectUseCase = new GetAllProyectUC();
        const getProyectsResult = await GetAllProyectUseCase.exec()
        return res.send({result: getProyectsResult})
    }
}

module.exports = GetAllProyectCtrl;
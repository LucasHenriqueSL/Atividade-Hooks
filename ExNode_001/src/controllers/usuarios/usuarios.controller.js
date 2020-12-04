const Usuario = require('../../services/usuarios.service');

module.exports = {
    criar (req, res, next) {
        const dados = req.body;
        Usuario.criar(dados)
            .then(token => {
                console.log(token);
                res.status(201).json(token)
            })
            .catch(err => {
                console.log(err);
                res.status(err.status).send(err);
            })
    },

    logar (req, res, next) {
        const { email, senha } = req.body;
        Usuario.pegar(email, senha)
            .then(token => {
                res.status(200).json(token)
            })
            .catch(err => {
                res.status(err.status).send(err);
            })
    },

    souEu (req, res) {
        return res.send(req.usuario);
    } 
}
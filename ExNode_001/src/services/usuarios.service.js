const Usuario = require('../models/usuarios.model');
const jwt = require('jsonwebtoken');

const errorHandler = require('../helpers/handler.error');

const SENHA_SECRETA = "GLEIDIN MONSTRO SAGRADO"

const gerarToken = (data) => {
    let token = jwt.sign(data, SENHA_SECRETA);
    return { token: Buffer.from(token).toString('base64') }
}

const descriptografarToken = (token) => {
    return Buffer.from(token, 'base64').toString('utf-8');
}

const criar = async (dados) => {
    try {
        const usuario = await Usuario.create(dados);
        if (usuario) return gerarToken(usuario.toJSON());
    } catch (error) {
        throw errorHandler('falha ao criar usuário', 400, error.errors);
    }
}

const pegar = async (email, senha) => {
    const usuario = await Usuario.findOne({ where: { email: email, senha: senha }}) 
    if (usuario) return gerarToken(usuario.toJSON());
    throw errorHandler('falha ao efetuar o login', 400, [{ message: "E-mail ou senha incorretos"}])
}

const verificar = async (token) => {
    try{
        const tokenDescriptografado = descriptografarToken(token)
        return jwt.verify(tokenDescriptografado, SENHA_SECRETA);
    } catch(error) {
        throw errorHandler("Token inválido", 401);
    }
}

module.exports = {
    criar,
    pegar,
    verificar
}
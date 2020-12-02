const { DataTypes } =  require("sequelize");
const connection = require('../config/db.connection');

const UsuarioModel = connection.define("Usuarios", {
    nome: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo nome não pode ser vazio"
            },
            notNull: {
                msg: "Por favor informe seu nome"
            }
        }
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo e-mail não pode ser vazio"
            },
            notNull: {
                msg: "Por favor informe seu e-mail"
            },
            isEmail: {
                msg: "Informe um e-mail válido"
            }
        }
    },
    senha: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo senha não pode ser vazio"
            },
            notNull: {
                msg: "Por favor informe uma senha"
            }
        }
    }
}, {
    underscored: true,
    modelName: "Usuarios",
    freezeTableName: true, 
    timestamps: false,
    defaultScope: false
});
        

module.exports = UsuarioModel;
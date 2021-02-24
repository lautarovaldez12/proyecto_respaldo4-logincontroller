const {check} = require('express-validator');

module.exports = [
    check('email')
    .notEmpty().withMessage('Campo requerido'),

    check('email')
    .isEmail().withMessage('Formato de email invalido'),

    check('pass').
    notEmpty().withMessage('password requerido')


]
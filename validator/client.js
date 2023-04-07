const { check } = require('express-validator') //TODO <---
const { validateResult } = require('../validator/validateHelper')

const validateCreate = [ //TODO:name, age, email
    check('firstName')
        .exists()
        .not()
        .isEmpty()
        .withMessage('Write your name, please.')
        // .not()
        // .isNumeric()
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('Name must not conatain numbers or symbols.'),

        check('lastName')
        .exists()
        .not()
        .isEmpty()
        .withMessage('Write your last name, please.')
        // .not()
        // .isNumeric()
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('Name must not conatain numbers or symbols.'),

    check('emailAddress')
        .exists()
        .isEmail(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }

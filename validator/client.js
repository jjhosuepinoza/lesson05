const { check, validationResult } = require('express-validator');

const validateCreate = [  check('firstName')    .exists()    .not()    .isEmpty()    .withMessage('4001: Write your name, please.')    .matches(/^[A-Za-z\s]+$/)
    .withMessage('4002: Name must not contain numbers or symbols.'),

  check('lastName')
    .exists()
    .not()
    .isEmpty()
    .withMessage('4003: Write your last name, please.')
    .matches(/^[A-Za-z\s]+$/)
    .withMessage('4004: Last name must not contain numbers or symbols.'),
  check('Phone number')
  .exists()
  .isNumeric(),
  check('emailAddress')
    .exists()
    .isEmail()
    .withMessage('4005: Please provide a valid email address.'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ code: '4000', message: 'Bad Request', errors: errors.array() });
    } else {
      next();
    }
  }
];

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ code: '5000', message: 'Internal Server Error' });
};

module.exports = { validateCreate, errorHandler };

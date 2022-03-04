const { check, validationResult } = require('express-validator')

exports.userValidationResult = (req, res, next) => {
    const result = validationResult(req)
    console.log(!result.isEmpty())
    if (!result.isEmpty()) {
        const error = result.array()[0].msg
        console.log(error)
        return res.json({ error: error })
    }
    next()
}

exports.userValidator = [
    check('Name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Name is Required')
        .isLength({ min: 3, max: 20 })
        .withMessage("Name must be 3 to 20 characters Long"),

    check('email')
        .trim()
        .not()
        .isEmpty()
        .withMessage('email is Required')
        .isEmail()
        .withMessage("Enter the valid email"),

    check('phone')
        .trim()
        .not()
        .isEmpty()
        .withMessage('phone Number is Required')
        .isLength(10)
        .withMessage("Enter the valid Phone Number"),

    check('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Password is Required')
        .isLength({ min: 8, max: 20 })
        .withMessage("Enter the min of '8' characters"),

]
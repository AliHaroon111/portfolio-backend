import {validationResult} from 'express-validator';

export const ContactValidationRules = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 3, max: 40 }).withMessage('Name must be between 3 and 50 characters'),

    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .normalizeEmail(), 

    body('message')
        .trim()
        .notEmpty().withMessage('Message is required')
        .isLength({ min: 10, max: 500 }).withMessage('Message must be between 10 and 500 characters'),
] // It simply attaches a hidden list of errors to the req

export const validateContact = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({
            status: 'fail',
            message: errors.array[0].msg  // Grabs the first error message cleanly
        })
    }
    next(); // Move to the controller if everything is clean!
}
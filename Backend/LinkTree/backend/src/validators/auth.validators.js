import { body } from 'express-validator';

export const registerValidation = [
    body('username')
        .trim()
        .notEmpty()
        .withMessage('Username is required')
        .isLength({ min: 3 })
        .withMessage('Username must be at least 3 characters long')
        .isLength({ max: 30 })
        .withMessage('Username must not exceed 30 characters')
        .matches(/^[a-zA-Z0-9_-]+$/)
        .withMessage('Username can only contain letters, numbers, underscores, and hyphens'),

    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email address')
        .normalizeEmail(),

    body('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .matches(/[A-Z]/)
        .withMessage('Password must contain at least one uppercase letter')
        .matches(/[0-9]/)
        .withMessage('Password must contain at least one number')
        .matches(/[!@#$%^&*]/)
        .withMessage('Password must contain at least one special character (!@#$%^&*)')
];

export const loginValidation = [
    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email address')
        .normalizeEmail(),

    body('password')
        .notEmpty()
        .withMessage('Password is required')
];

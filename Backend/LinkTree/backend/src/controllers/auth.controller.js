import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

// Generate JWT token
const generateToken = (userId) => {
    return jwt.sign(
        { id: userId },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
};

// Register Controller
export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'User with this email or username already exists'
            });
        }

        // Create new user
        const newUser = new User({
            username,
            email,
            password
        });

        // Save user (password will be hashed by pre-save hook)
        await newUser.save();

        // Generate token
        const token = generateToken(newUser._id);

        // Set cookie
        res.cookie('authToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            },
            token
        });
    } catch (error) {
        console.error('Register error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error registering user',
            error: error.message
        });
    }
};

// Login Controller
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Compare password using the model method
        const isPasswordMatch = await user.matchPassword(password);

        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid password'
            });
        }

        // Generate token
        const token = generateToken(user._id);

        // Set cookie
        res.cookie('authToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        return res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            },
            token
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error logging in user',
            error: error.message
        });
    }
};

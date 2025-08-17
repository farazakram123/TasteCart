import  User  from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

// Register User
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name ||!email ||!password) {
        return res.status(400).json({ 
            success: false, 
            message: 'Please provide all fields' 
        });
    }
    try {
        // Check if email already exists
        const exists = await User.findOne({ email });
        if(exists) {
            return res.status(203).json({ 
                success: false, 
                message: 'Email already exists' 
            });
        }
        // Validate email format and strong password
        if(!validator.isEmail(email)) {
            return res.status(203).json({ 
                success: false, 
                message: 'Invalid email format' 
            });
        } else if(password.length < 8) {
            return res.status(203).json({ 
                success: false, 
                message: 'Password must be at least 8 characters long' 
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })
        const user = await newUser.save();
        const token = createToken(user._id);

        res.status(200).json({
            success: true,
            message: 'User registered successfully',
            token
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Login User
export const loginUser = async (req, res) => {
    const {email, password} = req.body;
    if (!email ||!password) {
        return res.status(400).json({ 
            success: false, 
            message: 'Please provide email and password' 
        });
    }
    try {
        const user = await User.findOne({email});
        if(!user) {
            return res.status(203).json({
                success: false,
                message: 'User not found'
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(203).json({
                success: false,
                message: 'Invalid Credentials'
            });
        }

        // user is authenticated, create token
        const token = createToken(user._id);
        
        res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            token
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
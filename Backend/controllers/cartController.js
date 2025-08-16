import User from '../models/userModel.js'

// Add items to user's Cart
export const addToCart = async (req, res) => {
    try {
        let userData = await User.findById(req.body.userId);

        let cartData = await userData.cartData;

        if(!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        await User.findByIdAndUpdate(req.body.userId, {cartData});

        res.status(200).json({
            success: true,
            message: 'Item added to cart successfully',
            cartData
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

// Remove items from user's Cart
export const removeFromCart = async (req, res) => {
    try {
        let userData = await User.findById(req.body.userId);

        let cartData = await userData.cartData;

        if(cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1;
        }

        await User.findByIdAndUpdate(req.body.userId, {cartData});

        res.status(200).json({
            success: true,
            message: 'Item removed from cart successfully',
            cartData
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

// Get user's Cart
export const getCart = async (req, res) => {
    try {
        let userData = await User.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.status(200).json({
            success: true,
            message: 'Cart fetched successfully',
            cartData
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        })
    }
}
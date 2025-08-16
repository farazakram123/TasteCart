import Order from '../models/orderModel.js';
import User from '../models/userModel.js';
// Place Order
export const placeOrder = async (req, res) => {
    const frontend_url = 'http://localhost:5173';

    try {
        const newOrder = new Order({
            userId : req.body.userId,
            items : req.body.items,
            amount : req.body.amount,
            address : req.body.address
        })

        await newOrder.save();
        await User.findByIdAndUpdate(req.body.userId, {cartData : {}});
        
        res.status(200).json({
            success : true,
            message : "Order placed successfully",
            success_url : `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            newOrder
        });

    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        });
        
    }
}
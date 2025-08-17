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

export const verifyOrder = async (req, res) => {
    const {orderId, success} = req.body;

    try {
        if(success) {
            res.json({
                success : true,
                message : "Order verified successfully"
            })
        } else {
            await Order.findByIdAndDelete(orderId);
            res.json({
                success : false,
                message : "Order verification failed"
            })
        }

    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        });
    }
}

export const userOrders = async (req, res) => {
    try {
        const orders = await Order.find({userId : req.body.userId});

        res.status(200).json({
            success : true,
            message : "User orders fetched successfully",
            data : orders
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        });
    }

}

// Listing orders for admin panel
export const listOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.json({
            success : true,
            message : "All orders fetched successfully",
            data : orders
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        });

    }
}

// API for updating order status
export const updateStatus = async (req, res) => {
    try{
        await Order.findByIdAndUpdate(req.body.orderId, {status : req.body.status});
        res.status(200).json({
            success: true,
            message: 'Status Updated'
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
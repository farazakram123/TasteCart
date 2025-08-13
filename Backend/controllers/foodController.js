import Food from "../models/foodModel.js";
import fs from "fs";

// Add a new food item
export const addFood = async (req, res) => {
  try {
    let image_filename = `${req.file.filename}`;

    const newFood = new Food({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: image_filename,
    });
    await newFood.save();
    res.status(200).json({
      success: true,
      message: "New Food Added",
      data: newFood
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get all food items
export const getAllFood = async (req, res) => {
  try {
    const allFood = await Food.find({});
    if (!allFood) {
      return res.status(404).json({
        success: false,
        message: "No Food Items Found"
      })
    }
    res.status(200).json({
      success: true,
      message: "All Food Items",
      data: allFood
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

// remove a food item
export const removeFood = async (req, res) => {
  try {
    const foodToRemove = await Food.findByIdAndDelete(req.params.id);
    if (!foodToRemove) {
      return res.status(404).json({
        success: false,
        message: "Food Item Not Found"
      })
    }
    fs.unlinkSync(`uploads/${foodToRemove.image}`);

    res.status(200).json({
      success: true,
      message: "Food Item Removed",
      data: foodToRemove
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

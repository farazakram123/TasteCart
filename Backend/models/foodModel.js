import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    typeof: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const FoodModel = mongoose.models.Food || mongoose.model("Food", foodSchema);

export default FoodModel;

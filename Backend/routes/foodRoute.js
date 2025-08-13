import express from 'express';
import { addFood, getAllFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// Image upload configuration
const storage = multer.diskStorage({
    destination : "uploads",
    filename : (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

foodRouter.post('/add', upload.single('image'), addFood);
foodRouter.get('/list', getAllFood);
foodRouter.delete('/remove/:id', removeFood);



export default foodRouter;
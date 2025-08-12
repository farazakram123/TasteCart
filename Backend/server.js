import express from 'express';
import cors from 'cors';

// app configuration
const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API Working');
});

// Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

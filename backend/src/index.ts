import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.static('../frontend/build'));

const port = process.env.port || 4000;
app.get('*', function (req, res) {
    res.sendFile('index.html', { root: '../frontend/build/' });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

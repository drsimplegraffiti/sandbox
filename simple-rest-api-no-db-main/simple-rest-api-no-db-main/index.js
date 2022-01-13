import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/users.js';


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(morgan('dev'))

app.get('/', (req, res) => res.send('Homepage'));
app.use('/users', userRoutes);


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
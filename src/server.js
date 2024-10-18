import express from 'express';
import postRoutes from './routes/postRoutes.js';

const app = express();
const PORT = 3020;

app.use(express.json());
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

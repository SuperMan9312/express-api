import express from 'express';
import cors from 'cors';
import tasksRouter from './routes/tasks';

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/tasks', tasksRouter);

export default app;

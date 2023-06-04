import express from 'express';
import cors from 'cors';
import faqsRouter from './routes/faqsRouter.js';
import projectsRouter from './routes/projectsRouter.js';
import visitedRouter from './routes/visitedRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = 5000;
app.listen(port, () => {
  console.log("server listening on port", port);
});

app.use('/api/visited', visitedRouter);
app.use('/api/faqs', faqsRouter);
app.use('/api/projects', projectsRouter);

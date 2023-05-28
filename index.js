import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import faqsRouter from './routes/faqsRouter.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const port = 4000;
app.listen(port, () => {
  console.log("server listening on port", port);
});


app.use('/api/faqs', faqsRouter);
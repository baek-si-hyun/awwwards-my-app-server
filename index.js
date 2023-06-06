const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = 5000;
app.listen(port, () => {
  console.log("server listening on port", port);
});

app.use('/api/visited', require('./routes/visitedRouter.js'));
app.use('/api/faqs',  require('./routes/faqsRouter.js'));
app.use('/api/projects', require('./routes/projectsRouter.js'));

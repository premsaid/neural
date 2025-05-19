require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const deepsearch = require('./routes/deepsearch');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/deepsearch', deepsearch);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

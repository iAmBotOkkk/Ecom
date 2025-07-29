const express = require('express');
const cors = require ('cors');
const Router = require('./routes/index')
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1",Router);
app.listen(3000 , () => {
    `Server running on port`
});
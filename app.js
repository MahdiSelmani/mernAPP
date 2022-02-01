const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/car');
const app = express();
const port = 5000;

const carRouter = router;
app.use(express.json());
app.use('/api/cars',carRouter)





connectDB();
app.listen(port,()=>console.log(`Server running on port ${port}`))
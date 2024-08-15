const express = require('express');
// const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');


const categoryRouters = require('./routes/category.js')
const productRouters = require('./routes/products.js')
const userRouters = require('./routes/user.js')

const app = express();

app.use(express.json());
app.use(cors());
app.options('*', cors());

// app.use(bodyparser.json());

// app.use('/api/users',userRouters);
app.use('/api/category',categoryRouters);
app.use('/api/products',productRouters);
app.use('/api/user',userRouters);

mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000
}).then(()=>{
    console.log('Database is connected!');
}).catch((err)=>{
    console.log(err);
})

// mongoose.connect(process.env.CONNECTION_STRING)
// const connect = mongoose.connection
// connect.on('error',console.error.bind(console,'MOngoDB connection error'))
// connect.once('open',()=>{
//     console.log('MongoDB is connected')
// })

app.listen(process.env.PORT,()=>{
    console.log(`App is running on port: ${process.env.PORT}`)
})

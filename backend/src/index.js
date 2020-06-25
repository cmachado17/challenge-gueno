const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;


const app = express();

//middlewares
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-type']
}));

//routes
app.use(require('../routes/index'));


app.listen(PORT, () =>{
    console.log('Server corriendo en puerto: ' + PORT);
})
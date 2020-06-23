const express = require('express');

const PORT = process.env.PORT || 5000;


const app = express();

//routes
app.use(require('../routes/index'));


app.listen(PORT, () =>{
    console.log('Server corriendo en puerto: ' + PORT);
})
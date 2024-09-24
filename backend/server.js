const express = require('express');
const app = express();
const port = 3030;


//middleware


app.get('/',(req,res)=> {
    res.send('API is running...');
})

app.listen(port , ()=> {
    console.log(`Server is running on port ${port}`);
})
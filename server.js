const express = require("express");
const app = express();
require("dotenv").config();

app.get('/', (req, res)=>{
    res.send(`${process.env.OLA}`)

})

app.listen(3000);
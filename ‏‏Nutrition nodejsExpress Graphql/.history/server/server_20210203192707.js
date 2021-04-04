const express = require('express');
const graphql = require('express-graphql');


const app = express();

app.use('/graphql')

app.listen(4001, ()=>{
    console.log("listening on port 4001")
})
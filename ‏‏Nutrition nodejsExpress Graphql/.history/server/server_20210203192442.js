const express = require('express');
const graphql = require('express-gr')


const app = express();

app.listen(4001, ()=>{
    console.log("listening on port 4001")
})
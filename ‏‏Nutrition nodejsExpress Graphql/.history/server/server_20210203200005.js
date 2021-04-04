const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const query =require('query')

const app = express();

app.use("/graphql", graphqlHTTP({
    //schema
}));

app.listen(4001, ()=>{
    console.log("listening on port 4001")
})
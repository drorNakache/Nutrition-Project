const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema =require('./schema')
const mongoose = require('mongoose');

const connection ="mongodb+srv://shmouel:shmouel1234@cluster0.boxrg.mongodb.net/librairy?retryWrites=true&w=majority";
const app = express();

mongoose.connect(connection, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
//when you use 'once' it signifies that the event will be called only once 
//i.e the first time the event occurred like here in this case the first time
// when the connection is opened ,it will not occur once per request 
//but rather once when the mongoose connection is made with the db 
mongoose.connection.once("open", () => {
  console.log("mongoDB connected");
});

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4001, ()=>{
    console.log("listening on port 4001")
})
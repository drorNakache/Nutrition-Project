const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema =require('./schema')
const mongoose = require('mongoose');

const cors = require("cors");

const connection="mongodb+srv://dror:dror770@cluster0.ozmjl.azure.mongodb.net/graphql1?retryWrites=true&w=majority";
const app = express();

app.use(cors());

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

app.listen(4000, ()=>{
    console.log("listening on port 4000")
})
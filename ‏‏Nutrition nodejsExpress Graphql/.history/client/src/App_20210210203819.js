import React from "react";
import ApolloClient from "apollo-boost"
import {ApolloProvider} from "react-apollo";
import BookList from "./components/BookList"
import AddBook from "./components/AddBook"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});
const App =()=>{
 {
    return (
      <ApolloProvider client={client}>
         <div>
           <BookList />
           <A
        </div>
      </ApolloProvider>
       
     
    );
  }
}

export default App;

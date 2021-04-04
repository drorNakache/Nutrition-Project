import React, { Component } from 'react';
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      author{
          name
      }
      }
    }
  
`;
const BookList=(props)=>{
    const data = props.data
      console.log(props);
        return(
            <div>
                <ul id="book-list">
                {
                    data.loading = true ?  return <div>data is loading</div> :
                     data.map(book => {
                         return (<li>{book.name}  {book.author}</li>)
                     })
                }
                </ul>
            </div>
        );
    }


export default graphql(getBooksQuery)(BookList);

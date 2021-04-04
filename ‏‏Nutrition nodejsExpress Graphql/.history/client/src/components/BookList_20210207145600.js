import React, { Component } from 'react';
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      authorId {
        name
      }
    }
  }
`;
const BookList=(props)=>{
      console.log(props);
        return(
            <div>
                <ul id="book-list">
                    <li>Book name</li>
                </ul>
            </div>
        );
    }


export default graphql(getBooksQuery)(BookList);

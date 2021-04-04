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
                    data.loading = true ? <div>data is loading</div> ? data.map()
                }
                </ul>
            </div>
        );
    }


export default graphql(getBooksQuery)(BookList);

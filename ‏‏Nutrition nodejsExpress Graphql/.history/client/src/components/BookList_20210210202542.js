import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      author
      {
          name
      }
      id
    }
  }
`;

const BookList = (props) => {
  console.log(props);
  const data = props.data
  return (
    <div>
      <h3>GraphQL project</h3>
      <ul>
          {
              data.books && AND
              data.books.map(book=>{
                  return (<li>{book.name} by {book.author.name}</li>)
              })
          }
      </ul>
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);

a || b
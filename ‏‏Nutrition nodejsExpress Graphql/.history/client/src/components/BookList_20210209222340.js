import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      id
      name
      author {
        name
      }
    }
  }
`;
const BookList = (props) => {
  console.log(props);
  const data = props.data;
//   const [books, setBooks] = useState([]);
//   useEffect(() => {
//     setBooks(props.data.books);
//   });
  return (
    <div>
      <ul id="book-list">
        {
        data.books &&
          data.books.map((book) => {
            return (
              <li key={book.id}>
                {book.name} {book.author.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);

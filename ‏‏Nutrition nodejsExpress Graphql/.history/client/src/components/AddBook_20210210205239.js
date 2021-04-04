import React from 'react';
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getAuthorsQuery = gql`
  {
    authors {
      name
      author {
        name
      }
      id
    }
  }
`;

const AddBook =(props)=>{

    return (
      <div style={{ width: "270px" }}>
        <h3>add new book</h3>
        <form>
          <div>
            <label>Book Name</label>
            <input style={{ float: "right" }} />
          </div>

          <br />

          <div>
            <label>Book Genre</label>
            <input style={{ float: "right" }} />
          </div>
          <br />

          <div>
            <label>Book Author</label>
            <select style={{ float: "right" }}>
              <option selected disabled>
                choose an author
              </option>
            </select>
          </div>
          <br />
          <button>submit new book</button>
        </form>
      </div>
    );

}

export default AddBook
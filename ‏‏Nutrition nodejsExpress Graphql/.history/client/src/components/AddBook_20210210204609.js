import React from 'react';

const AddBook =()=>{

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
          <butt
        </form>
      </div>
    );

}

export default AddBook
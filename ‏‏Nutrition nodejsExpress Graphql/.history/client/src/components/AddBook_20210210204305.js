import React from 'react';

const AddBook =()=>{

    return (
      <div>
        <h3>add new book</h3>
        <form>
          <div>
            <label>Book Name</label>
            <input />
          </div>

          <br />

          <div>
            <label>Book Genre</label>
            <input />
          </div>

          <div>
              <select>
                  <option selected disabled>choose an author</option>
              </select>
          </div>
          <br />
        </form>
      </div>
    );

}

export default AddBook
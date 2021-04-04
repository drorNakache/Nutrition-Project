import React, { Component } from 'react';
import { Glyphicon, Nav, Navbar, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export class Check extends Component {
  displayName = Check.name

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>

        <Link to={'./Counter'}>
  <button > Click Me </button>
</Link>

       </div>
    );
  }
}

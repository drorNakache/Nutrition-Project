import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Check } from './components/Check'
export default class App extends Component {
  displayName = App.name

  render() {
    return (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/Check' component={Check} />
    </Switch>
      
    );
  }
}

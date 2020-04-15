import React, { Component } from 'react';
import {
  Provider,
  Field,
  fields
} from './Pages/ExamplePage';
import Header from './Header';
import './App.css';
import DataContextProvider from './DataContext';
import EditPage from './Pages/EditPage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './Pages/HomePage';

export default class App extends Component {
  render() {
    return (
      <Provider>
          <article className="App-contents">
            <DataContextProvider>
              <Router>
                <Switch>
                  <Route exact path={'/page/:id'} component={EditPage} />
                  <Route exact path={'/'} component={HomePage} />
                  <Redirect to={'/'} />
                </Switch>
              </Router>
            </DataContextProvider>
          </article>
      </Provider>
    );
  }
}
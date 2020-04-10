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

export default class App extends Component {
  render() {
    return (
      <Provider>
        {/* <section className="App">
          <Header />
        </section> */}
        <article className="App-contents">
          <DataContextProvider>
            <EditPage />
          </DataContextProvider>
        </article>
      </Provider>
    );
  }
}
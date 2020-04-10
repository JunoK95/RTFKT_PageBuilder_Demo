import React, { Component } from 'react';
import classNames from 'classnames';
import { Field, fields } from './Pages/ExamplePage';
import logo from './logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Field field={fields.isRunning}>
          {isRunning => (
            <img
              src={logo}
              className={classNames('App-logo', {
                'App-logo--off': !isRunning
              })}
              alt="logo"
            />
          )}
        </Field>
        
        <p>
          Edit <Field field={fields.file}>
            {file => (
              <code>{file}</code>
            )}
          </Field> and save to reload.
        </p>
        <Field field={fields.learnMore}>
          {text => (
            <a className="App-link" href="https://fnatic.com" target="_blank" rel="noopener noreferrer">
              Hello {text}
            </a>
          )}
        </Field>
      </header>
    );
  }
}

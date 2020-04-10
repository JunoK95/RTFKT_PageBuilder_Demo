Consider this the first commit of a page builder / editor tool that you'd be building at RTFKT. Only the barebones are done for you to build on. This challenge is designed to test your JS and React knowledge, as well as your product thinking when it comes to the client-end users. We want to asess how your decision making in regards to features, how you implement them and code quality. We also care a lot about good UI/UX and interactions!

Feel free to change the codebase however you wish.

Goodluck :)

## The Gist

Everything we prepared for this challenge can be found in the `src/createPage` folder. The rest of the files are a sample application, treat it as a starting point.  This project takes a similar approach to [React Context](https://reactjs.org/docs/context.html) but for page building. If you've used React Context already you'll feel right at home. If not, we strongly recommend you read its documentation before you begin.

### How it works

Much like `React.createContext`, you can create a new Page "context" as follows:

```jsx
import createPage from '../createPage';
import FieldTypes from '../createPage/FieldTypes';

const fieldTypes = {
  foo: FieldTypes.string
};

const defaultValues = {
  foo: "Hello World"
};

const MyPage = createPage(
  fieldTypes,
  defaultValues
);

export const Provider = MyPage.Provider;
export const Field = MyPage.Field;
export const fields = MyPage.fields;
```

The fields you define in `fieldTypes` can be consumed using the `<Field>` component:

```jsx
import React, { Component } from 'react';
import {
  Provider,
  Field,
  fields
} from './Pages/MyPage';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <h1>My Page</h1>
        <article>
          <Field field={fields.foo}>
            {value => <p>{value}</p>}
          </Field>
        </article>
      </Provider>
    );
  }
}

```

Much like `<Context.Consumer>`, `<Page.Field>` can be accessed anywhere within the `<Provider>`.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

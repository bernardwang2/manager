import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from './firebase';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component{
  
  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    console.log(firebase.name);
    console.log(firebase.database());
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

import Layout from './components/layout/Layout'
// import LoginForm from './components/accountBox/loginForm'
import { LoginForm } from './components/accountBox/loginForm';
import MainPage from './MainPage';
import Routes from './components/Routes';

const store = createStore(
  rootReducer
)

document.title = 'Dept_Library_Automation'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    {/* <MainPage /> */}

      {/* <div>hi</div> */}
      {/* <LoginForm /> */}
      {/* <Layout /> */}
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

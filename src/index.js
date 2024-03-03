import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/root';
import { fetchContacts } from './Redux/contactSlice';

store.dispatch(fetchContacts());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

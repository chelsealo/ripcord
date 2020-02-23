import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { loadUsers } from './actions/userActions';
import './styles/styles.css';
import App from './components/App';

const store = configureStore();
store.dispatch(loadUsers());

render(<App store={store} />, document.getElementById('root'));
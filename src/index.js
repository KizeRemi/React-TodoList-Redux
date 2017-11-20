import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todos from './Todos';
import { Provider } from 'react-redux';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><Todos /></Provider>, document.getElementById('root'));

registerServiceWorker();

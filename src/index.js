import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'mobx-react';

import App from './components/App/App';
import stores from './stores/stores'

ReactDOM.render((
  <Provider {...stores}>
    <Router>
      <App/>
    </Router>
  </Provider>
), document.getElementById('root'));

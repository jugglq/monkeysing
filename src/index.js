import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import DevTools from 'mobx-react-devtools'

import Layout from './components/Layout/Layout';

ReactDOM.render(
  <div>
  <Layout/>
  <DevTools/>
</div>, document.getElementById('root'));

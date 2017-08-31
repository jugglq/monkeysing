import React from 'react'
// import DevTools from 'mobx-react-devtools'
import '../Common/normalize.css';
import './App.scss';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const App = ({location}) => {
  return (
    <div id="layout">
      <Header location={location}/>
      <Main/>
      <Footer/>
      {/* <DevTools /> */}
      <div>{location}</div>
    </div>
  );
}

export default App;

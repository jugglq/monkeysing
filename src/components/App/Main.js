import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../Home/Home'
import Technology from '../Technology/Technology'
import Project from '../Project/Project'

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/technology' component={Technology}/>
      <Route path='/project' component={Project}/>
    </Switch>
  )
}

export default Main;

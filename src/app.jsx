import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { MainPage } from './Component/Pages/Main/'
import { NoMatch } from './Component/Pages/404/'

class App extends Component {
  render() {
    return(
      <Switch>
          <Route exact path="/" render={() => <MainPage/>} />
          <Route render={() => <NoMatch/>} />
      </Switch>
    )
  }
}

export default App

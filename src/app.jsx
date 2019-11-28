import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Layout } from './Component/Layout/'
import { NoMatch } from './Component/Pages/404/'
import { MainPage } from './Component/Pages/Main'
import { About } from './Component/Pages/About'


class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" render={() =>
            <Layout component={MainPage} />
          }/>

        <Route exact path="/about" render={() =>
            <Layout component={About} />
          }/>

        <Route render={() =>
            <Layout component={NoMatch} />
          }/>
      </Switch>
    )
  }
}

export default App

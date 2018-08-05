import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../components/Main'
import CurrencyList from '../components/CurrencyList'
import CurrencyFilter from '../containers/CurrencyFilter'
import CurrencyDetail from '../components/CurrencyDetail'

const Router = () => (
  <BrowserRouter>
    <Main>
      <Switch>
        <Route exact path="/" component={CurrencyList} />
        <Route exact path="/settings" component={CurrencyFilter} />
        <Route
          path="/:id"
          render={({ match }) => <CurrencyDetail id={match.params.id} />}
        />
      </Switch>
    </Main>
  </BrowserRouter>
)

export default Router

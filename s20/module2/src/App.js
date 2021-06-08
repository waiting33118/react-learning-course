import { Redirect, Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AllQuotes from './pages/AllQuotes'
import NewQuote from './pages/NewQuote'
import QuotesDetail from './pages/QuoteDetail'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuotesDetail />
        </Route>
        <Route path="/new-quote" exact>
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App

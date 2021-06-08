import QuoteList from "../components/quotes/QuoteList"

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Max', text: 'learning react is fun'},
  {id: 'q2', author: 'Max2', text: 'learning react is great'}
]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>
}

export default AllQuotes

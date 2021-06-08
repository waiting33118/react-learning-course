import { Route, useParams } from 'react-router'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'learning react is fun' },
  { id: 'q2', author: 'Max2', text: 'learning react is great' }
]

const QuotesDetail = () => {
  const { quoteId } = useParams()

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId)

  if (!quote) {
    return <p>No Quote Found</p>
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </div>
  )
}

export default QuotesDetail

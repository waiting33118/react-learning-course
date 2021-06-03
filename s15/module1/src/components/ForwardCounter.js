import useCounter from '../hooks/useCounter'
import Card from './Card'

const positiveCounter = (counter) => ++counter

const ForwardCounter = () => {
  const counter = useCounter(positiveCounter)
  return <Card>{counter}</Card>
}

export default ForwardCounter

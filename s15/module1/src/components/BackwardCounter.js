import useCounter from '../hooks/useCounter'
import Card from './Card'

const negativeCounter = (counter) => counter - 1

const BackwardCounter = () => {
  const counter = useCounter(negativeCounter)
  return <Card>{counter}</Card>
}

export default BackwardCounter

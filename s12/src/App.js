import { useCallback, useMemo, useState } from 'react'

import './App.css'
import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/DemoOuput'

function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  console.log('App running')

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevState) => !prevState)
  }, [])

  // const toggleParagraphHandler = () => {
  //   setShowParagraph((prevState) => !prevState)
  // }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput
        show={false}
        items={useMemo(() => [4, 7, 2, 8, 3, 9, 1], [])}
      />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  )
}

export default App

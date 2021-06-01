import React, { Fragment, useMemo } from 'react'

const DemoOuput = (props) => {
  console.log('DemoOutput running')
  const sortedList = useMemo(() => {
    console.log('Items sorted!')
    return props.items.sort((a, b) => a - b)
  }, [props.items])

  return (
    <Fragment>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{props.show ? 'This is a new paragraph' : ''}</p>
    </Fragment>
  )
}

export default React.memo(DemoOuput)

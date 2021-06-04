import { useReducer } from 'react'

const initialInputState = {
  value: '',
  wasTouched: false
}

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { ...state, value: action.value }
  }

  if (action.type === 'BLUR') {
    return { ...state, wasTouched: true }
  }

  if (action.type === 'RESET') {
    return {
      value: '',
      wasTouched: false
    }
  }

  return initialInputState
}

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  )

  const valueIsValid = validateValue(inputState.value)
  const hasError = !valueIsValid && inputState.wasTouched

  const valueChangeHandler = (e) =>
    dispatch({ type: 'INPUT', value: e.target.value })
  const elementBlurHandler = () => dispatch({ type: 'BLUR' })
  const reset = () => dispatch({ type: 'RESET' })

  return {
    enteredValue: inputState.value,
    hasError,
    valueIsValid,
    valueChangeHandler,
    elementBlurHandler,
    reset
  }
}

export default useInput

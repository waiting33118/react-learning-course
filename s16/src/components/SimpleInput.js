import useInput from '../hooks/useInput'

const SimpleInput = () => {
  const {
    enteredValue: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangeHandler: nameChangeHandler,
    elementBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== '')

  const {
    enteredValue: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailChangeHandler,
    elementBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput((value) => value.trim() !== '' && value.includes('@'))

  const formSubmitHandler = (e) => {
    e.preventDefault()
    if (!enteredNameIsValid || !enteredEmailIsValid) return
    resetNameInput()
    resetEmailInput()
  }

  let formIsValid = false
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const nameInputClasses = enteredNameHasError
    ? 'form-control invalid'
    : 'form-control'

  const emailInputClasses = enteredEmailHasError
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {enteredNameHasError && (
          <p className="error-text">Name must not be Empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailHasError && (
          <p className="error-text">
            Email must not be Empty and need to includes '@'
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput

import useInput from '../hooks/useInput'

const isNotEmpty = (value) => value.trim() !== ''
const isvalidEmailFormat = (value) => isNotEmpty(value) && value.includes('@')

const BasicForm = () => {
  const {
    enteredValue: enteredFirstName,
    valueIsValid: enteredFirstNameIsValid,
    hasError: enteredFirstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    elementBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty)

  const {
    enteredValue: enteredLastName,
    valueIsValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    elementBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty)

  const {
    enteredValue: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailChangeHandler,
    elementBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isvalidEmailFormat)

  let formIsValid = false

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()

    if (!formIsValid) return

    console.log('submit!')
    console.table([enteredFirstName, enteredLastName, enteredEmail])

    resetFirstName()
    resetLastName()
    resetEmail()
  }

  const validationStyle = (isInValid) => {
    return isInValid ? 'form-control invalid' : 'form-control'
  }

  const firstNameStyle = validationStyle(enteredFirstNameHasError)
  const lastNameStyle = validationStyle(enteredLastNameHasError)
  const emailStyle = validationStyle(enteredEmailHasError)

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameStyle}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {enteredFirstNameHasError && (
            <p className="error-text">First Name should not be empty!</p>
          )}
        </div>
        <div className={lastNameStyle}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {enteredLastNameHasError && (
            <p className="error-text">Last Name should not be empty!</p>
          )}
        </div>
      </div>
      <div className={emailStyle}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailHasError && (
          <p className="error-text">
            Email should not be empty and need to includes @!
          </p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default BasicForm

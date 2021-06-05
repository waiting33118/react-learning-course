import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import classes from './AvailableMeals.module.css'
import { useEffect, useState } from 'react'

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [httpError, setHttpError] = useState()

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          'https://react-http-fc47b-default-rtdb.firebaseio.com/Meals.json'
        )

        if (!response.ok) throw new Error('Somthing went wrong!')

        const meals = await response.json()

        const loadedMeals = []
        for (let key in meals) {
          loadedMeals.push({
            ...meals[key],
            id: key
          })
        }

        setMeals(loadedMeals)
        setIsloading(false)
      } catch (error) {
        setIsloading(false)
        setHttpError(error.message)
      }
    }
    fetchMeals()
  }, [])

  if (isLoading)
    return (
      <section className={classes['meals-loading']}>
        <p>Loading...</p>
      </section>
    )

  if (httpError)
    return (
      <section className={classes['meals-error']}>
        <p>{httpError}</p>
      </section>
    )

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals

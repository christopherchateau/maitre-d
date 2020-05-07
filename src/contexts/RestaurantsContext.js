import React, { createContext, useState, useEffect } from 'react'
import { getData, getMockRestaurants } from '../utilities/apiCalls'

export const RestaurantsContext = createContext()

const RestaurantsContextProvider = props => {
	const [restaurants, setRestaurants] = useState(null)

	const errors = restaurants && restaurants.errors
	const loading = !restaurants

	useEffect(() => {
		loadData()
	}, [])

	const loadData = async () => {
		setRestaurants(
			await getMockRestaurants()
			// await getData('restaurants')
		)
	}

	return (
		<RestaurantsContext.Provider value={{ loading, errors, restaurants }}>
			{props.children}
		</RestaurantsContext.Provider>
	)
}

export default RestaurantsContextProvider

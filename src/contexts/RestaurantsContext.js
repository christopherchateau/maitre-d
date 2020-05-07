import React, { createContext, useState, useEffect } from 'react'
import { getMockRestaurants } from '../utilities/apiCalls'

export const RestaurantsContext = createContext()

const RestaurantsContextProvider = props => {
	const [restaurants, setRestaurants] = useState(null)

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
		<RestaurantsContext.Provider value={{ restaurants }}>
			{props.children}
		</RestaurantsContext.Provider>
	)
}

export default RestaurantsContextProvider

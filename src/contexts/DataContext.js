import React, { createContext, useState, useEffect } from 'react'
import { getData, getMockRestaurants } from '../utilities/apiCalls'

export const DataContext = createContext()

const DataContextProvider = props => {
	const [restaurants, setRestaurants] = useState(null)

	const loading = !restaurants
	const errors = restaurants && restaurants.errors

	useEffect(() => {
		loadData()
	}, [])

	const loadData = async () => {
		setRestaurants(
			getMockRestaurants()
			// await getData('restaurants')
		)
	}

	return (
		<DataContext.Provider value={{ loading, errors, restaurants }}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider

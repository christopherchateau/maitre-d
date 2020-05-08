import React, { createContext, useState, useEffect } from 'react'
import { getData, getMockRestaurants } from '../utilities/apiCalls'

export const DataContext = createContext()

const DataContextProvider = props => {
	const [restaurants, setRestaurants] = useState(null)
	const [filters, setFilters] = useState([])

	const loading = !restaurants
	const errors = restaurants && restaurants.errors

	// const filteredRestaurants = restaurants.filter(restaurant => {
	// 	filters.forEach(({ menuName, selection }) => {
	// 		console.log(menuName, selection)
	
	// 		if (selection) {
	
	// 		}
	// 	})

	// })
	

	useEffect(() => {
		loadData()
	}, [])

	const loadData = async () => {
		setRestaurants(
			getMockRestaurants()
			// await getData('restaurants')
		)
	}

	const updateFilters = (menuName, selection) => {
		setFilters(prevFilters => [
			{ menuName, selection },
			...prevFilters.filter(filter => filter.menuName !== menuName),
		])
	}

	return (
		<DataContext.Provider
			value={{ loading, errors, restaurants, updateFilters }}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider

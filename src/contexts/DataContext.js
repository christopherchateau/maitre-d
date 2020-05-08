import React, { createContext, useState, useEffect } from 'react'
import { getData, getMockRestaurants } from '../utilities/apiCalls'

export const DataContext = createContext()

const DataContextProvider = props => {
	const [restaurants, setRestaurants] = useState(null)
	const [filters, setFilters] = useState([])

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

	const updateFilter = (menuName, selection) => {
		setFilters(prevFilters => [
			{ menuName, selection },
			...prevFilters.filter(menu => menu.menuName !== menuName),
		])
	}

	return (
		<DataContext.Provider
			value={{ loading, errors, restaurants, updateFilter }}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider

import React, { createContext, useState, useEffect } from 'react'
import { getData } from '../utilities/apiCalls'
import { defaultFilters } from '../data'

export const DataContext = createContext()

const DataContextProvider = props => {
	const [restaurants, setRestaurants] = useState(null)
	const [filters, setFilters] = useState({})
	const [search, setSearch] = useState('')

	const loading = !restaurants
	const errors = restaurants && restaurants.errors

	useEffect(() => {
		loadData()
	}, [])

	const loadData = async () => {
		setRestaurants(
			await getData('restaurants')
		)

		defaultFilters.map(filter => updateFilters(filter))
	}

	const updateFilters = (type, selection = '') =>
		type === 'Add Filter'
			? addFilter(selection)
			: setFilters(prevFilters => ({ ...prevFilters, [type]: selection }))

	const addFilter = type => updateFilters(type.toLowerCase())

	const removeFilter = type =>
		setFilters(prevFilters => {
			delete prevFilters[type]
			return { ...prevFilters }
		})

	const filteredRestaurants = () =>
		restaurants.filter(
			restaurant => runFilters(restaurant) && runSearch(restaurant)
		)

	const runFilters = restaurant => {
		const currentFilters = Object.keys(filters)

		for (let i = 0; i < currentFilters.length; i++) {
			const type = currentFilters[i]

			if (filters[type] && !restaurant[type].includes(filters[type])) {
				return false
			}
		}

		return true
	}

	const runSearch = restaurant => {
		const searchTypes = ['name', 'city', 'genre']

		for (let i = 0; i < searchTypes.length; i++) {
			const type = searchTypes[i]

			if (
				!search ||
				restaurant[type].some(type =>
					type.toLowerCase().includes(search.toLowerCase())
				)
			)
				return true
		}

		return false
	}

	return (
		<DataContext.Provider
			value={{
				errors,
				loading,
				filters,
				setSearch,
				restaurants,
				removeFilter,
				updateFilters,
				filteredRestaurants,
			}}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider

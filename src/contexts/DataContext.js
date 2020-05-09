import React, { createContext, useState, useEffect } from 'react'
import { getData } from '../utilities/apiCalls'
import { capitalizeFirstChar } from '../utilities/helper'

export const DataContext = createContext()

const DataContextProvider = props => {
	const [restaurants, setRestaurants] = useState(null)
	const [filters, setFilters] = useState({})
	const [search, setSearch] = useState('')

	const loading = !restaurants
	const errors = restaurants && restaurants.errors
	const menus = Object.keys(filters)

	useEffect(() => {
		loadData()
	}, [])

	const loadData = async () => {
		const presetMenus = ['name', 'state', 'genre', 'attire']

		setRestaurants(
			await getData('restaurants')
		)
		presetMenus.map(menu => updateFilters(menu))
	}

	const availableFilters = () => {
		const restaurantAttributes =
			(restaurants && Object.keys(restaurants[0])) || []

		return restaurantAttributes
			.filter(attr => filters[attr] !== '')
			.map(attr => capitalizeFirstChar(attr))
	}

	const filteredRestaurants = () => {
		let result = []

		restaurants.forEach(restaurant => {
			if (runFilters(restaurant) && runSearch(restaurant))
				result.push(restaurant)
		})
		return result
	}

	const runFilters = restaurant => {
		for (let i = 0; i < menus.length; i++) {
			const type = menus[i]

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
			) {
				return true
			}
		}
		return false
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

	return (
		<DataContext.Provider
			value={{
				menus,
				errors,
				loading,
				filters,
				setSearch,
				restaurants,
				removeFilter,
				updateFilters,
				availableFilters,
				filteredRestaurants,
			}}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider

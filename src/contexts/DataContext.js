import React, { createContext, useState, useEffect } from 'react'
import { getData, getMockRestaurants } from '../utilities/apiCalls'
import { capitalizeFirstChar } from '../utilities/helper'

export const DataContext = createContext()

const presetMenus = ['name', 'state', 'genre', 'attire']

const DataContextProvider = props => {
	const [restaurants, setRestaurants] = useState(null)
	const [filters, setFilters] = useState({})

	const loading = !restaurants
	const errors = restaurants && restaurants.errors
	const menus = Object.keys(filters)
	const restaurantAttributes =
		(restaurants && Object.keys(restaurants[0])) || []

	useEffect(() => {
		loadData()
	}, [])

	const loadData = async () => {
		setRestaurants(
			getMockRestaurants()
			// await getData('restaurants')
		)
		presetMenus.map(menu => updateFilters(menu))
	}

	const availableFilters = () =>
		restaurantAttributes
			.filter(attr => filters[attr] !== '')
			.map(attr => capitalizeFirstChar(attr))

	const filteredRestaurants = () => {
		let result = []

		restaurants.forEach(restaurant => {
			if (runFilters(restaurant)) result.push(restaurant)
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

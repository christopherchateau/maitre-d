import React, { createContext, useState, useEffect } from 'react'
import { getData, getMockRestaurants } from '../utilities/apiCalls'
import { capitalizeFirstChar } from '../utilities/helper'

export const DataContext = createContext()

const presetMenus = ['state', 'genre', 'attire', 'name']

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
		presetMenus.map(menu => updateMenus(menu))
	}

	const availableMenus = () => {
		const result = []
		restaurantAttributes.forEach(type => {
			if (!menus.find(menu => menu.type === type))
				result.push(capitalizeFirstChar(type))
		})

		return result
	}

	const filteredRestaurants = () => {
		let result = []

		restaurants.forEach(restaurant => {
			if (runFilters(restaurant)) result.push(restaurant)
		})

		return result
	}

	const runFilters = restaurant => {
		for (let i = 0; i < menus.length; i++) {
			const { type, selection } = menus[i]

			if (selection && !restaurant[type].includes(selection)) {
				return false
			}
		}
		return true
	}

	const updateMenus = (type, selection = '') =>
		type === 'Add Filter'
			? addMenu(selection)
			: setFilters(prevFilters => ({ ...prevFilters, [type]: selection }))

	const addMenu = type => updateMenus(type.toLowerCase())

	const removeMenu = type =>
		setFilters(prevFilters => {
			delete prevFilters[type]
			return { ...prevFilters }
		})

	return (
		<DataContext.Provider
			value={{
				loading,
				errors,
				restaurants,
				filteredRestaurants,
				menus,
				removeMenu,
				updateMenus,
				availableMenus,
			}}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider

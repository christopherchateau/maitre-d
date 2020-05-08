import React, { createContext, useState, useEffect } from 'react'
import { getData, getMockRestaurants } from '../utilities/apiCalls'
import { sortByKey, capitalizeFirstChar } from '../utilities/helper'

export const DataContext = createContext()

const presetMenus = ['state', 'genre', 'attire', 'name']

const DataContextProvider = props => {
	const [restaurants, setRestaurants] = useState(null)
	const [menus, setMenus] = useState([])

	const loading = !restaurants
	const errors = restaurants && restaurants.errors
	const restaurantAttributes =
		(restaurants && Object.keys(restaurants[0])) || []

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

	const updateMenus = (type, selection = '') =>
		type === 'Add Filter'
			? addMenu(selection)
			: setMenus(prevMenus =>
					sortByKey(
						[
							{ type, selection },
							...prevMenus.filter(filter => filter.type !== type),
						],
						'type'
					)
			  )

	const addMenu = type => updateMenus(type.toLowerCase())

	const removeMenu = type =>
		setMenus(menus.filter(menu => menu.type !== type))

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

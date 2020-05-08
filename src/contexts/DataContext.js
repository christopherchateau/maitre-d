import React, { createContext, useState, useEffect } from 'react'
import { getData, getMockRestaurants } from '../utilities/apiCalls'
import { sortByKey, capitalizeFirstChar } from '../utilities/helper'

export const DataContext = createContext()

const presetMenus = ['state', 'genre', 'attire', 'zip', 'city', 'tags', 'name']

const DataContextProvider = props => {
	const [restaurants, setRestaurants] = useState(null)
	const [menus, setMenus] = useState([])

	const loading = !restaurants
	const errors = restaurants && restaurants.errors

	const availableMenus = () => {
		const result = []
		const allMenuTypes = (restaurants && Object.keys(restaurants[0])) || []
		allMenuTypes.forEach(type => {
			if (!menus.find(menu => menu.name === type))
				result.push(capitalizeFirstChar(type))
		})

		return result
	}

	// const currentFilters = filters.map(filter => filter.menuName)
	// const availableFilters = () => allFilters.filter(
	// 	filter => !currentFilters.includes(filter)
	// )

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
		presetMenus.map(menu => updateMenus(menu))
	}

	const updateMenus = (name, selection = '') =>
		name === 'Add Filter'
			? addMenu(selection)
			: setMenus(prevMenus =>
					sortByKey(
						[
							{ name, selection },
							...prevMenus.filter(filter => filter.name !== name),
						],
						'name'
					)
			  )

	const addMenu = name => updateMenus(name.toLowerCase())

	const removeMenu = name =>
		setMenus(menus.filter(menu => menu.name !== name))

	return (
		<DataContext.Provider
			value={{
				loading,
				errors,
				restaurants,
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

import React, { createContext, useState, useEffect } from 'react'
import { getData } from '../utilities/apiCalls'

export const DataContext = createContext()

const DataContextProvider = props => {
	const [restaurants, setRestaurants] = useState(null)

	useEffect(() => {
		loadData()
	}, [])

	const loadData = async () => {
		setRestaurants(await getData('restaurants'))
	}

	return (
		<DataContext.Provider value={{ restaurants }}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider

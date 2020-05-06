import React, { createContext, useState, useEffect } from 'react'
import { getMockRestaurants } from '../utilities/apiCalls'

export const DataContext = createContext()

const DataContextProvider = props => {
	const [data, setData] = useState(null)

	useEffect(() => {
		loadData()
	}, [])

	const loadData = async () => {
        setData(await getMockRestaurants())
	}

	return (
		<DataContext.Provider value={{ data }}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider

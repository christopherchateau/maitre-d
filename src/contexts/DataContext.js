import React, { createContext, useState, useEffect } from 'react'

export const DataContext = createContext()

const DataContextProvider = props => {
	const [data, setData] = useState(null)

	useEffect(() => {
		loadData()
	}, [])

	const loadData = async () => {
		setData(await getData())
	}

	return (
		<DataContext.Provider value={{ data }}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider

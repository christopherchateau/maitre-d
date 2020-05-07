import React, { useContext, useState, useRef } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'

const DropDown = ({ filter }) => {
	const { restaurants } = useContext(DataContext)

	const [selectedItem, setSelectedItem] = useState('')

	const dropdownRef = useRef()

	const generateMenuItem = item => (
		<option value={item} key={item}>
			{item}
		</option>
	)

	const menuItems = [...restaurants].reduce((menuItems, restaurant) => {
		const item = restaurant[filter]
		menuItems.push(generateMenuItem(item))

		return menuItems
	}, [])

	return (
		<DropDownTheme
			ref={dropdownRef}
			value={selectedItem}
			onChange={() => setSelectedItem(dropdownRef.current.value)}>
			{[generateMenuItem('Any'), ...menuItems]}
		</DropDownTheme>
	)
}

export default DropDown

const DropDownTheme = styled.select``

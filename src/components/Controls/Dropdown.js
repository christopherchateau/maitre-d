import React, { useContext, useState, useRef } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'

const DropDown = ({ filter = 'state' }) => {
	const { restaurants } = useContext(DataContext)

	const [selectedItem, setSelectedItem] = useState('')

	const dropdownRef = useRef()

	const menuItems = [...restaurants].reduce((menuItems, restaurant) => {
		const item = restaurant[filter]

		menuItems.push(
			<option value={item} key={item}>
				{item}
			</option>
		)

		return menuItems
	}, [])

	return (
		<DropDownTheme
			ref={dropdownRef}
			value={selectedItem}
			onChange={() => setSelectedItem(dropdownRef.current.value)}>
			{menuItems}
		</DropDownTheme>
	)
}

export default DropDown

const DropDownTheme = styled.select``

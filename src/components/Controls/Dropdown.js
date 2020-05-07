import React, { useContext, useState, useRef } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'
import { sortByKey } from '../../utilities/helper'

const DropDown = ({ filter }) => {
	const { restaurants } = useContext(DataContext)

	const [selectedItem, setSelectedItem] = useState('')

	const dropdownRef = useRef()

	const generateMenu = () => {
		const menuItems = []
		const formattedMenu = restaurants.reduce(

			(formattedMenu, restaurant) => {
				const values = restaurant[filter]

				values.forEach(value => {
					if (!menuItems.includes(value)) {
						menuItems.push(value)
						formattedMenu.push(generateMenuItem(value))
					}
                })

				return formattedMenu
			}, []
		)

		return [generateMenuItem('Any'), ...sortByKey(formattedMenu)]
	}

	const generateMenuItem = item => (
		<option value={item} key={item}>
			{item}
		</option>
	)

	return (
		<DropDownTheme
			ref={dropdownRef}
			value={selectedItem}
			onChange={() => setSelectedItem(dropdownRef.current.value)}>
			{generateMenu()}
		</DropDownTheme>
	)
}

export default DropDown

const DropDownTheme = styled.select``

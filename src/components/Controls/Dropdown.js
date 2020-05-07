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

				values.forEach(val => {
					const value = formatValue(val)

					if (!menuItems.includes(value)) {
						menuItems.push(value)
						formattedMenu.push(generateMenuItem(value))
					}
				})

				return formattedMenu
			},
			[]
		)

		return [generateMenuItem('All'), ...sortByKey(formattedMenu)]
	}

	const generateMenuItem = item => (
		<option value={item} key={item}>
			{item}
		</option>
	)

	const formatValue = value =>
		value
			.split(' ')
			.map(
				str =>
					str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
			)
			.join(' ')

	return (
		<DropDownTheme>
			<select
				onChange={() => setSelectedItem(dropdownRef.current.value)}
				ref={dropdownRef}
				value={selectedItem}>
				{generateMenu()}
			</select>
		</DropDownTheme>
	)
}

export default DropDown

const DropDownTheme = styled.div`
	select {
		font-size: ${props => props.theme.font.size.large};
		margin-right: ${props => props.theme.spacing.medium};
		margin-top: ${props => props.theme.spacing.medium};
		max-width: 10rem;
	}
`

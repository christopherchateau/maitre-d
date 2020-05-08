import React, { useContext, useState, useRef } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'
import { sortByKey, capitalizeFirstChar } from '../../utilities/helper'

const DropDown = ({ menuName }) => {
	const { restaurants } = useContext(DataContext)

	const [selectedItem, setSelectedItem] = useState('')

	const dropdownRef = useRef()

	const generateMenu = () => {
		const menuItems = []
		const formattedMenu = restaurants.reduce(
			(formattedMenu, restaurant) => {
                let values = restaurant[menuName]
                if (typeof values === 'string') values = [values]

				values.forEach(value => {
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

	return (
		<DropDownTheme>
			<h3 className='menu-name'>{capitalizeFirstChar(menuName)}</h3>
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
	display: flex;
	margin-top: ${props => props.theme.spacing.medium};
	margin-right: ${props => props.theme.spacing.large};

	.menu-name {
		font-size: ${props => props.theme.font.size.medium};
		font-weight: ${props => props.theme.font.weight.light};
		margin-right: ${props => props.theme.spacing.small};
	}

	select {
		font-size: ${props => props.theme.font.size.medium};
		max-width: 10rem;
	}
`

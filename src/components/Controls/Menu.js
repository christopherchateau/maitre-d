import React, { useContext, useState, useRef } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'
import { staticMenuOptions } from './data'
import {
	sortByKey,
	capitalizeFirstChar,
} from '../../utilities/helper'

const Menu = ({ type }) => {
	const { restaurants, removeMenu, updateMenus, availableMenus } = useContext(
		DataContext
	)

	const [selectedItem, setSelectedItem] = useState('All')

	const menuRef = useRef()

	const defaultOptions = {
		...{ ...staticMenuOptions, 'Add Filter': availableMenus() },
	}

	const handleBtnClick = () => removeMenu(type)

	const handleSelection = option => {
		if (option === 'All') option = ''
		setSelectedItem(option)
		updateMenus(type, option)
	}

	const generateMenu = () => {
		const menuOptions = []
		const formattedMenu = defaultOptions[type]
			? defaultOptions[type].map(option => formatMenuOption(option))
			: restaurants.reduce((formattedMenu, restaurant) => {
					let values = restaurant[type]

					values.forEach(value => {

						if (!menuOptions.includes(value)) {
							menuOptions.push(value)
							formattedMenu.push(formatMenuOption(value))
						}
					})

					return formattedMenu
			  }, [])

		const sortedMenu = sortByKey(formattedMenu)
		const firstOption = type !== 'Add Filter' ? 'All' : ''

		return [formatMenuOption(firstOption), ...sortedMenu]
	}

	const formatMenuOption = str => (
		<option value={str} key={str}>
			{str}
		</option>
	)

	return (
		<MenuTheme>
			{console.log(type)}
			<h3 className='menu-type'>{capitalizeFirstChar(type) + ':'}</h3>
			<select
				onChange={() => handleSelection(menuRef.current.value)}
				ref={menuRef}
				value={selectedItem}>
				{generateMenu()}
			</select>
			{type !== 'Add Filter' && (
				<button onClick={handleBtnClick}>X</button>
			)}
		</MenuTheme>
	)
}

export default Menu

const MenuTheme = styled.div`
	align-items: center;
	display: flex;
	margin-top: ${props => props.theme.spacing.medium};
	margin-right: ${props => props.theme.spacing.large};

	.menu-type {
		font-size: ${props => props.theme.font.size.large};
		font-weight: ${props => props.theme.font.weight.light};
		margin: ${props => props.theme.spacing.small};
		margin-right: ${props => props.theme.spacing.medium};
	}

	select {
		font-size: ${props => props.theme.font.size.medium};
		height: ${props => props.theme.spacing.xxlarge};
		max-width: 10rem;
		padding: ${props => props.theme.spacing.small};
	}

	button {
		cursor: pointer;
		font-size: ${props => props.theme.font.size.small};
		height: ${props => props.theme.spacing.xxlarge};
		transition: all 0.5s ease-out;

		&:hover {
			background: ${props => props.theme.color.darkgrey};
			color: ${props => props.theme.color.white};
			transition: all 0.5s ease-out;
		}
	}
`

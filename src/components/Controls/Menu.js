import React, { useContext, useState, useRef } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'
import { staticMenuOptions } from './data'
import { sortByKey, capitalizeFirstChar } from '../../utilities/helper'

const Menu = ({ name }) => {
	const {
		restaurants,
		removeMenu,
		updateMenus,
		availableMenus,
	} = useContext(DataContext)

	const [selectedItem, setSelectedItem] = useState('')

	const menuRef = useRef()

	const defaultOptions = {
		...{ ...staticMenuOptions, 'Add Filter': availableMenus() },
	}

	const handleBtnClick = () => removeMenu(name)

	const handleSelection = option => {
		option === 'All' ? setSelectedItem('') : setSelectedItem(option)
		updateMenus(name, option)
	}

	const generateMenu = () => {
		const menuOptions = []
		const formattedMenu = defaultOptions[name]
			? defaultOptions[name].map(option => formatMenuOption(option))
			: restaurants.reduce((formattedMenu, restaurant) => {
					let values = restaurant[name]
					if (typeof values === 'string') values = [values]

					values.forEach(val => {
						const value = capitalizeFirstChar(val)

						if (!menuOptions.includes(value)) {
							menuOptions.push(value)
							formattedMenu.push(formatMenuOption(value))
						}
					})

					return formattedMenu
			  }, [])

		const sortedMenu = sortByKey(formattedMenu)
		const firstOption = name !== 'Add Filter' ? 'All' : ''

		return [formatMenuOption(firstOption), ...sortedMenu]
	}

	const formatMenuOption = str => (
		<option value={str} key={str}>
			{str}
		</option>
	)

	return (
		<MenuTheme>
			<h3 className='menu-name'>{capitalizeFirstChar(name) + ':'}</h3>
			<select
				onChange={() => handleSelection(menuRef.current.value)}
				ref={menuRef}
				value={selectedItem}>
				{generateMenu()}
			</select>
			{name !== 'Add Filter' && (
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

	.menu-name {
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

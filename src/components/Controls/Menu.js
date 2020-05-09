import React, { useContext, useRef } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'
import { staticMenuOptions } from './data'
import { sortByKey, capitalizeFirstChar } from '../../utilities/helper'

const Menu = ({ type, addFilterMenu = false }) => {
	const {
		restaurants,
		removeFilter,
		updateFilters,
		availableFilters,
	} = useContext(DataContext)

	const menuRef = useRef()

	const defaultOptions = {
		...{ ...staticMenuOptions, 'Add Filter': availableFilters() },
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
		const firstOption = addFilterMenu ? '' : 'All'

		return [formatMenuOption(firstOption), ...sortedMenu]
	}

	const formatMenuOption = str => (
		<option value={str} key={str}>
			{str}
		</option>
	)

	const handleBtnClick = () => removeFilter(type)

	const handleSelection = option => {
		if (option === 'All') option = ''
		updateFilters(type, option)
	}

	return (
		<MenuTheme>
			<h3 className='menu-type'>{capitalizeFirstChar(type) + ':'}</h3>
			<select
				onChange={() => handleSelection(menuRef.current.value)}
				ref={menuRef}>
				{generateMenu()}
			</select>
			{!addFilterMenu && <button onClick={handleBtnClick}>X</button>}
		</MenuTheme>
	)
}

export default Menu

const MenuTheme = styled.div`
	align-items: center;
	display: flex;
	margin-top: ${props => props.theme.spacing.medium};
	margin-right: ${props => props.theme.spacing.large};

	@media (max-width: ${props => props.theme.breakpoint.desktop}) {
		margin-right: ${props => props.theme.spacing.small};
	}

	.menu-type {
		font-size: ${props => props.theme.font.size.large};
		font-weight: ${props => props.theme.font.weight.light};
		margin: ${props => props.theme.spacing.small};
		margin-right: ${props => props.theme.spacing.medium};

		@media (max-width: ${props => props.theme.breakpoint.desktop}) {
			font-size: ${props => props.theme.font.size.medium};
		}
	}

	select {
		font-size: ${props => props.theme.font.size.medium};
		height: ${props => props.theme.spacing.xxlarge};
		max-width: 10rem;
		padding: ${props => props.theme.spacing.small};

		@media (max-width: ${props => props.theme.breakpoint.desktop}) {
			font-size: ${props => props.theme.font.size.small};
			height: ${props => props.theme.spacing.xlarge};
			padding: ${props => props.theme.spacing.xsmall};
		}
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

		@media (max-width: ${props => props.theme.breakpoint.desktop}) {
			height: ${props => props.theme.spacing.xlarge};
		}
	}
`

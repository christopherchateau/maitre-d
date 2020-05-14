import React, { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import Menu from './Menu'
import styled from 'styled-components'
import { allFilters, defaultMenuOptions } from '../../data'
import { capitalizeFirstChar } from '../../utilities/helper'

const MenuControls = () => {
	const { filters } = useContext(DataContext)

	const unusedFilters = allFilters.reduce((unusedFilters, type) => {
		if (!(type in filters)) unusedFilters.push(capitalizeFirstChar(type))
		return unusedFilters
	}, [])

	const menus = Object.keys(filters).map(type => (
		<Menu
			{...{
				type,
				key: type,
				defaultOptions: defaultMenuOptions[type],
			}}
		/>
	))

	if (unusedFilters.length)
		menus.push(
			<Menu
				{...{
					type: 'Add Filter',
					key: 'Add Filter',
					defaultOptions: unusedFilters,
				}}
			/>
		)

	return <MenuControlsTheme>{menus}</MenuControlsTheme>
}

export default MenuControls

const MenuControlsTheme = styled.div`
	display: flex;
	flex-wrap: wrap;

	@media (max-width: ${props => props.theme.breakpoint.largephone}) {
		justify-content: center;
	}
`

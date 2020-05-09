import React, { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import Menu from './Menu'
import styled from 'styled-components'

const MenuControls = () => {
	const { menus } = useContext(DataContext)

	return (
		<MenuControlsTheme>
			{menus.map(type => (
				<Menu {...{ type, key: type }} />
			))}
			<Menu
				{...{ type: 'Add Filter', key: 'Add Filter' }}
				addFilterMenu
			/>
		</MenuControlsTheme>
	)
}

export default MenuControls

const MenuControlsTheme = styled.div`
	display: flex;
	flex-wrap: wrap;

	@media (max-width: ${props => props.theme.breakpoint.largephone}) {
		justify-content: center;
	}
`

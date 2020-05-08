import React, { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'
import Menu from './Menu'

const MenuControls = () => {
	const { menus } = useContext(DataContext)

	return (
		<MenuControlsTheme>
			{menus.map(({ name }) => (
				<Menu {...{ name, key: name }} />
			))}
			<Menu
				{...{
					name: 'Add Filter',
					key: 'Add Filter',
				}}
			/>
		</MenuControlsTheme>
	)
}

export default MenuControls

const MenuControlsTheme = styled.div`
	display: flex;
	flex-wrap: wrap;
`

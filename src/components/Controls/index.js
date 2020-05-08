import React, { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import SearchControls from './SearchControls'

const Controls = () => {
	const { menus } = useContext(DataContext)

	return (
		<ControlsTheme>
			<SearchControls />
			<div className='dropdowns'>
				{menus.map(({ name }) => (
					<Dropdown {...{ name, key: name }} />
				))}
				<Dropdown
					{...{
						name: 'Add Filter',
						key: 'Add Filter',
					}}
				/>
			</div>
		</ControlsTheme>
	)
}

export default Controls

const ControlsTheme = styled.form`
	background: ${props => props.theme.color.white};
	max-width: ${props => props.theme.layout.maxwidth};
	margin-top: ${props => props.theme.spacing.medium};
	margin-bottom: ${props => props.theme.spacing.medium};
	padding: ${props => props.theme.spacing.medium};
	width: 90%;

	.dropdowns {
		display: flex;
		flex-wrap: wrap;
	}
`

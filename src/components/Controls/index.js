import React from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import SearchControls from './SearchControls'

const Controls = () => {
	const presetDropDownMenus = ['state', 'genre', 'attire', 'zip', 'city', 'tags', 'name']

	return (
		<ControlsTheme>
			<SearchControls />
			<div className='dropdowns'>
				{presetDropDownMenus.map(filter => (
					<Dropdown {...{ filter }} />
				))}
			</div>
		</ControlsTheme>
	)
}

export default Controls

const ControlsTheme = styled.form`
	background: ${props => props.theme.color.white};
	max-width: ${props => props.theme.layout.maxwidth};
	margin-top:${props => props.theme.spacing.medium};
	margin-bottom:${props => props.theme.spacing.medium};
	padding: ${props => props.theme.spacing.medium};
	width: 90%;

	.dropdowns {
		display: flex;
		flex-wrap: wrap;
	}
`

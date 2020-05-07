import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import SearchControls from './SearchControls'

const Controls = () => {
	const presetDropDownMenus = ['state', 'genre', 'attire', 'zip', 'hours', 'lat', 'long', 'city']

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
	padding: ${props => props.theme.spacing.medium};
	width: 80%;
`

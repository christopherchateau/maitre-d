import React from 'react'
import styled from 'styled-components'
import MenuControls from './MenuControls'
import SearchControls from './SearchControls'

const Controls = () => (
	<ControlsTheme>
		<SearchControls />
		<MenuControls />
	</ControlsTheme>
)

export default Controls

const ControlsTheme = styled.form`
	background: ${props => props.theme.color.white};
	max-width: ${props => props.theme.layout.maxwidth};
	margin-top: ${props => props.theme.spacing.medium};
	margin-bottom: ${props => props.theme.spacing.medium};
	padding: ${props => props.theme.spacing.medium};
	width: ${props => props.theme.layout.contentwidth};
`

import React from 'react'
import MenuControls from './MenuControls'
import SearchControls from './SearchControls'
import styled from 'styled-components'

const Controls = () => (
	<ControlsTheme>
		<SearchControls />
		<MenuControls />
	</ControlsTheme>
)

export default Controls

const ControlsTheme = styled.div`
	background: ${props => props.theme.color.white};
	margin-bottom: ${props => props.theme.spacing.medium};
	margin-top: ${props => props.theme.spacing.medium};
	max-width: ${props => props.theme.layout.maxwidth};
	padding: ${props => props.theme.spacing.medium};
	width: ${props => props.theme.layout.contentwidth};
`

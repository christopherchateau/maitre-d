import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Controls from '../Controls'
import Restaurants from '../Restaurants'

const MainPage = () => (
	<MainPageTheme>
		<Logo />
		<Controls />
		<Restaurants />
	</MainPageTheme>
)

export default MainPage

const MainPageTheme = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: ${props => props.theme.spacing.xlarge};
	width: 100vw;

	@media (max-width: ${props => props.theme.breakpoint.desktop}) {
		padding: ${props => props.theme.spacing.medium};	
	}
`

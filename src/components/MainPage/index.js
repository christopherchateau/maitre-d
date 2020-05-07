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
	padding: 2rem;
`

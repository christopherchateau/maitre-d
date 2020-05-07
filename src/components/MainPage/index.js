import React from 'react'
import styled from 'styled-components'
import Controls from '../Controls'
import Restaurants from '../Restaurants'

const MainPage = () => (
	<MainPageTheme>
		<h1 className='title'>maître d'</h1>
		<Controls />
		<Restaurants />
	</MainPageTheme>
)

export default MainPage

const MainPageTheme = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	justify-content: space-between;

	.title {
		font-size: ${props => props.theme.font.size.xlarge};
	}
`

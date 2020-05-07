import React from 'react'
import styled from 'styled-components'
import Loading from '../Loading'
import Controls from '../Controls'
import Restaurants from '../Restaurants'

const App = () => (
	<AppTheme>
        {/* <Loading /> */}
		<h1 className='title'>maître d'</h1>
		<Controls />
		<Restaurants />
	</AppTheme>
)

export default App

const AppTheme = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	justify-content: center;

	.title {
		font-size: ${props => props.theme.font.size.xlarge};
	}
`

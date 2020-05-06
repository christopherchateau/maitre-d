import React from 'react'
import styled from 'styled-components'
import Controls from '../Controls'

const App = () => (
	<AppTheme>
		<h1 className='title'>maître d'</h1>
        <Controls />
	</AppTheme>
)

export default App

const AppTheme = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: space-evenly;

	.title {
		font-size: ${props => props.theme.font.size.xlarge};
	}
`

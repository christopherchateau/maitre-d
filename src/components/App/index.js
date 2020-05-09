import React, { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import Errors from '../Errors'
import Loading from '../Loading'
import MainPage from '../MainPage'
import styled from 'styled-components'

const App = () => {
	const { loading, errors } = useContext(DataContext)

	return (
		<AppTheme>
			{loading ? <Loading /> : errors ? <Errors /> : <MainPage />}
		</AppTheme>
	)
}

export default App

const AppTheme = styled.div`
	* {
		box-sizing: border-box;
	}

	align-items: center;
	background: ${props => props.theme.color.lightgrey};
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
`

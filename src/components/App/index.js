import React, { useContext } from 'react'
import styled from 'styled-components'
import { DataContext } from '../../contexts/DataContext'
import Errors from '../Errors'
import Loading from '../Loading'
import MainPage from '../MainPage'

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
	align-items: center;
	background: ${props => props.theme.color.lightgrey};
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	width: 100vw;
`

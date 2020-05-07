import React, { useContext } from 'react'
import styled from 'styled-components'
import { RestaurantsContext } from '../../contexts/RestaurantsContext'
import Errors from '../Errors'
import Loading from '../Loading'
import MainPage from '../MainPage'

const App = () => {
	const { loading, errors } = useContext(RestaurantsContext)

	return (
		<AppTheme>
			{loading ? <Loading /> : errors ? <Errors /> : <MainPage />}
		</AppTheme>
	)
}

export default App

const AppTheme = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	justify-content: center;
	padding: 3rem;
`

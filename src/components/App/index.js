import React, { useContext } from 'react'
import styled from 'styled-components'
import { RestaurantsContext } from '../../contexts/RestaurantsContext'
import Loading from '../Loading'
import MainPage from '../MainPage'

const App = () => {
	const { restaurants, loading } = useContext(RestaurantsContext)
    console.log(restaurants, loading)
	return <AppTheme>{loading ? <Loading /> : <MainPage />}</AppTheme>
}

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

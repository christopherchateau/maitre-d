import React, { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import Errors from '../Errors'
import Loading from '../Loading'
import MainPage from '../MainPage'
import backgroundImg from '../../images/background.jpg'
import styled from 'styled-components'

const App = () => {
	const { loading, errors } = useContext(DataContext)

	return (
		<AppTheme>
			<div className='background' />
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
	position: relative;

	.background {
		background-image: url(${backgroundImg});
		background-position: right;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;
		opacity: .6;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: -1;
	}
`

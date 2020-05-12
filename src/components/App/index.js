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
			<div className='background'></div>
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
	width: 100vw;
	position: relative;

	.background {
		background-attachment: fixed;
		background-position: top;
		background-image: url(${backgroundImg});
		background-repeat: no-repeat;
		background-size: cover;
		height: 100%;
		opacity: .8;
		position: absolute;
		width: 100%;
		z-index: -1;
	}
`

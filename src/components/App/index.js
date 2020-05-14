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
			<div className='overlay'></div>
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
	background-attachment: fixed;
	background-image: url(${backgroundImg});
	background-position: right;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
	position: relative;

	.overlay {
		background: ${props => props.theme.color.white};
		height: 100%;
		opacity: 0.3;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;
	}
`

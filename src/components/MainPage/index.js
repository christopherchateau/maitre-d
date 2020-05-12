import React from 'react'
import Logo from '../Logo'
import Controls from '../Controls'
import Restaurants from '../Restaurants'
import styled from 'styled-components'

const MainPage = () => (
	<MainPageTheme>
		<Logo />
		<div className='main-content'>
			<Controls />
			<Restaurants />
		</div>
	</MainPageTheme>
)

export default MainPage

const MainPageTheme = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: ${props => props.theme.spacing.xlarge};
	width: 100vw;

	@media (max-width: ${props => props.theme.breakpoint.desktop}) {
		padding: ${props => props.theme.spacing.medium};
	}

	.main-content {
		animation: main 3s ease-out forwards;

		@keyframes main {
			0% {
				opacity: 0;
			}
			50% {
				opacity: 0;
			}
			100% {
				opacity: 0.94;
			}
		}
	}
`

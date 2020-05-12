import React from 'react'
import img from '../../images/logo-white.png'
import styled from 'styled-components'

const Logo = () => (
	<LogoTheme>
		<h1>
			maître d'
			<img src={img} alt='maitre d' />
		</h1>
	</LogoTheme>
)

export default Logo

const LogoTheme = styled.div`
	animation: logo 2s ease-out forwards;
	padding-right: ${props => props.theme.spacing.xxxlarge};
	width: ${props => props.theme.layout.contentwidth};


	@keyframes logo {
		0% {
			opacity: 0;
		}
		30% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@media (max-width: ${props => props.theme.breakpoint.largephone}) {
		padding-right: ${props => props.theme.spacing.xxlarge};
	}

	h1 {
		color: white;
		font-family: ${props => props.theme.font.family};
		font-size: ${props => props.theme.font.size.xlarge};
		font-weight: ${props => props.theme.font.weight.light};
		margin: 0;
		position: relative;
		text-align: right;

		@media (max-width: ${props => props.theme.breakpoint.largephone}) {
			font-size: ${props => props.theme.font.size.large};
		}
	}

	img {
		height: 3rem;
		margin-left: ${props => props.theme.spacing.small};
		position: absolute;
		top: ${props => props.theme.spacing.small};

		@media (max-width: ${props => props.theme.breakpoint.largephone}) {
			height: 2rem;
			margin-left: ${props => props.theme.spacing.xsmall};
			top: 0;
		}
	}
`

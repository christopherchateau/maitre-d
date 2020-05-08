import React from 'react'
import styled from 'styled-components'
import img from '../../images/logo.png'

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
	padding-right: ${props => props.theme.spacing.xxxlarge};
	width: ${props => props.theme.layout.contentwidth};

	h1 {
		font-family: ${props => props.theme.font.family};
		font-size: ${props => props.theme.font.size.xlarge};
		font-weight: ${props => props.theme.font.weight.light};
		position: relative;
		margin: 0;
		text-align: right;
	}

	img {
		height: 3rem;
		margin-left: ${props => props.theme.spacing.small};
		position: absolute;
		top: ${props => props.theme.spacing.small};
	}
`

import React from 'react'
import styled from 'styled-components'
import img from '../../images/logo.png'

const Logo = () => (
	<LogoTheme>
		maître d'
		<img src={img} alt='maitre d' />
	</LogoTheme>
)

export default Logo

const LogoTheme = styled.h1`
    font-family: ${props => props.theme.font.family};
    font-size: ${props => props.theme.font.size.xlarge};
    font-weight: ${props => props.theme.font.weight.light};
    position: relative;
    
    img {
        height: 3.2rem;
        margin-left: ${props => props.theme.spacing.small};
        position: absolute;
        top: ${props => props.theme.spacing.small};
    }
`

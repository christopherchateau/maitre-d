import React from 'react'
import loadingImg from '../../images/loading.gif'
import styled from 'styled-components'

const Loading = () => <LoadingImg src={loadingImg} alt='loading' />

export default Loading

const LoadingImg = styled.img`
	height: ${props => props.theme.loader.size};
	width: ${props => props.theme.loader.size};
`

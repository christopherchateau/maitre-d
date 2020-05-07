import React from 'react'
import styled from 'styled-components'
import loadingImg from '../../images/loading.gif'

const Loading = () => <LoadingImg src={loadingImg} alt='loading' />

export default Loading

const LoadingImg = styled.img`
	height: 6rem;
	width: 6rem;
`

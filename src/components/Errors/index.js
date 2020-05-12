import React, { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'

const Errors = () => {
	const { errors } = useContext(DataContext)

	return (
		<ErrorsTheme>
			<h1>ERROR</h1>
			{errors.map(error => (
				<h3 key={error}>{`- ${error}`}</h3>
			))}
		</ErrorsTheme>
	)
}

export default Errors

const ErrorsTheme = styled.div`
	background: ${props => props.theme.color.lightgrey};
	max-width: ${props => props.theme.layout.maxwidth};
	opacity: .8;
	padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.xxxlarge};
`

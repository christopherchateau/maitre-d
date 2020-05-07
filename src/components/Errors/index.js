import React, { useContext } from 'react'
import styled from 'styled-components'
import { RestaurantsContext } from '../../contexts/RestaurantsContext'

const Errors = () => {
	const { errors } = useContext(RestaurantsContext)

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
	height: 3.6rem;
	width: 80%;
	max-width: ${props => props.theme.layout.maxwidth};
`

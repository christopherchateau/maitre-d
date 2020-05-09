import React from 'react'
import styled from 'styled-components'

const PaginationControls = () => {
	return (
		<PaginationControlsTheme>
			<button className='prev'>Prev</button>
			<button className='next'>Next</button>
		</PaginationControlsTheme>
	)
}

export default PaginationControls

const PaginationControlsTheme = styled.div`
	background: ${props => props.theme.color.white};
	display: flex;
	justify-content: space-evenly;
	margin: ${props => props.theme.spacing.xlarge} 0;
	padding: ${props => props.theme.spacing.large};

	button {
        cursor: pointer;
        font-size: ${props => props.theme.font.size.large};
		height: ${props => props.theme.spacing.xxlarge};
		transition: all 0.5s ease-out;
		width: 10rem;

		&:hover {
			background: ${props => props.theme.color.darkgrey};
			color: ${props => props.theme.color.white};
			transition: all 0.5s ease-out;
		}
	}
`

import React from 'react'
import styled from 'styled-components'

const PaginationControls = ({
	goBack,
	goForward,
	paginationIndex,
	canGoForward,
}) => {
	return (
		<PaginationControlsTheme>
			<button
				className='prev'
				onClick={goBack}
				disabled={paginationIndex === 0}>
				Prev
			</button>
			<button
				className='next'
				onClick={goForward}
				disabled={!canGoForward}>
				Next
			</button>
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
		font-size: ${props => props.theme.font.size.large};
		padding: ${props => props.theme.spacing.small};
		transition: all 0.5s ease-out;
		width: 10rem;

		&:hover:enabled {
			cursor: pointer;
			background: ${props => props.theme.color.darkgrey};
			color: ${props => props.theme.color.white};
			transition: all 0.5s ease-out;
		}
	}
`

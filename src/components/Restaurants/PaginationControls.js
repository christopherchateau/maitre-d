import React from 'react'
import styled from 'styled-components'

const PaginationControls = ({
	goBack,
	goForward,
	canGoForward,
	paginationIndex,
}) => {
	return (
		<PaginationControlsTheme>
			<button
				className='prev'
				onClick={goBack}
				disabled={paginationIndex === 0}>
				prev
			</button>
			<button
				className='next'
				onClick={goForward}
				disabled={!canGoForward}>
				next
			</button>
		</PaginationControlsTheme>
	)
}

export default PaginationControls

const PaginationControlsTheme = styled.div`
	background: ${props => props.theme.color.white};
	display: flex;
	justify-content: space-evenly;
	margin: ${props => props.theme.spacing.medium} 0;
	padding: ${props => props.theme.spacing.large};

	button {
		background: ${props => props.theme.color.lightgrey};
		border: 1px solid ${props => props.theme.color.darkgrey};
		border-radius: 2px;
		font-size: ${props => props.theme.font.size.large};
		padding: ${props => props.theme.spacing.small};
		transition: all 0.5s ease-out;
		width: 8rem;

		&:hover:enabled {
			background: ${props => props.theme.color.darkgrey};
			color: ${props => props.theme.color.white};
			cursor: pointer;
			transition: all 0.5s ease-out;
		}

		@media (max-width: ${props => props.theme.breakpoint.desktop}) {
			font-size: ${props => props.theme.font.size.medium};
			width: 30%;
		}
	}
`

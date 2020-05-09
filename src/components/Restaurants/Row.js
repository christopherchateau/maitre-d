import React, { useState } from 'react'
import styled from 'styled-components'

const Row = ({ name, city, state, telephone, genre, attire, website }) => {
	const [extraInfoToggle, setExtraInfoToggle] = useState(false)

	const handleRowClick = () => setExtraInfoToggle(!extraInfoToggle)

	return (
		<RowTheme>
			<div onClick={handleRowClick} className='row' key={telephone}>
				<h3 className='row-item'>{name}</h3>
				<h3 className='row-item'>{`${city}, ${state}`}</h3>
				<h3 className='row-item'>{telephone}</h3>
				<h3 className='row-item genres'>{genre.join(', ')}</h3>
			</div>
			{extraInfoToggle && (
				<div className='row extra-info'>
					<h3 className='row-item extra-item'>{attire}</h3>
					<h3 className='row-item extra-item website'>{website}</h3>
				</div>
			)}
		</RowTheme>
	)
}

export default Row

const RowTheme = styled.div`
	background: ${props => props.theme.color.white};
	transition: all 0.5s ease-out;

	&:hover {
		cursor: pointer;
		background: ${props => props.theme.color.lightgrey};
		transition: all 0.5s ease-out;
	}

	.row {
		align-items: center;
		border-bottom: 1px solid ${props => props.theme.color.darkgrey};
		display: flex;
		justify-content: space-between;

		&:nth-last-child(2) {
			border: none;
		}

		@media (max-width: ${props => props.theme.breakpoint.largephone}) {
			flex-direction: column;
		}
	}

	.row-item {
		font-weight: ${props => props.theme.font.weight.light};
		margin: 0;
		padding: ${props => props.theme.spacing.xlarge} ${props => props.theme.spacing.medium};
		text-align: center;
		width: 25%;

		@media (max-width: ${props => props.theme.breakpoint.desktop}) {
			font-size: ${props => props.theme.font.size.small};
			padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.small};
		}

		@media (max-width: ${props => props.theme.breakpoint.largephone}) {
			font-size: ${props => props.theme.font.size.large};
			width: 100%;
		}
	}

    .genres,
    .website {
		@media (max-width: ${props => props.theme.breakpoint.smallphone}) {
			font-size: ${props => props.theme.font.size.medium};
		}
	}

	.extra-item {
        width: 50%;
        
        @media (max-width: ${props => props.theme.breakpoint.largephone}) {
			width: 100%;
		}
	}
`

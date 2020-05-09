import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'
import PaginationControls from './PaginationControls'

const Restaurants = () => {
	const { filters, filteredRestaurants } = useContext(DataContext)

	const [paginationIndex, setPaginationIndex] = useState(0)

	const filteredByState = !!filters.state
	const displayRestaurants = filteredRestaurants()
	const displayCount = displayRestaurants.length
	const canGoForward = paginationIndex + 10 < displayCount

	useEffect(() => {
		setPaginationIndex(0)
	}, [displayCount])

	const goBack = () => {
		if (paginationIndex > 0) setPaginationIndex(paginationIndex - 10)
	}

	const goForward = () => {
		if (canGoForward) setPaginationIndex(paginationIndex + 10)
	}

	return (
		<RestaurantsTheme>
			{!displayRestaurants.length && filteredByState ? (
				<h3 className='row-item no-states-msg'>
					No Results Found In This State
				</h3>
			) : (
				displayRestaurants
					.slice(paginationIndex, paginationIndex + 10)
					.map(({ name, city, state, telephone, genre }) => {
						return (
							<div className='row' key={telephone}>
								<h3 className='row-item'>{name}</h3>
								<h3 className='row-item'>{`${city}, ${state}`}</h3>
								<h3 className='row-item'>{telephone}</h3>
								<h3 className='row-item'>{genre.join(', ')}</h3>
							</div>
						)
					})
			)}
			<PaginationControls
				{...{ goBack, goForward, paginationIndex, canGoForward }}
			/>
		</RestaurantsTheme>
	)
}

export default Restaurants

const RestaurantsTheme = styled.div`
	max-width: ${props => props.theme.layout.maxwidth};
	width: ${props => props.theme.layout.contentwidth};

	.row {
		align-items: center;
		background: ${props => props.theme.color.white};
		border-bottom: 1px solid ${props => props.theme.color.darkgrey};
		display: flex;
		justify-content: space-between;

		&:nth-last-child(2) {
			border: none;
		}
	}

	.row-item {
		font-weight: ${props => props.theme.font.weight.light};
		margin: 0;
		padding: ${props => props.theme.spacing.xlarge} ${props => props.theme.spacing.medium};
		text-align: center;
		width: 25%;
	}

	.no-states-msg {
		width: 100%;
	}
`

import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../contexts/DataContext'
import Row from './Row'
import PaginationControls from './PaginationControls'
import styled from 'styled-components'

const Restaurants = () => {
	const { filters, filteredRestaurants, statesWithNoResults } = useContext(
		DataContext
	)

	const [paginationIndex, setPaginationIndex] = useState(0)

	const displayRestaurants = filteredRestaurants()
	const displayCount = displayRestaurants.length
	const canGoForward = paginationIndex + 10 < displayCount

	let noResults = 'No Results Found'
	const selectedState = filters.state
	
	// advise if selected state has no restaurants
	if (selectedState && statesWithNoResults.includes(selectedState))
		noResults += ' For This State'

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
			{!displayRestaurants.length
			
			? <h3 className='no-results'>{noResults}</h3>

			: displayRestaurants
				.slice(paginationIndex, paginationIndex + 10)
				.map(restaurant => (
					<Row {...restaurant} key={restaurant.telephone} />
				))
			}

			<PaginationControls
				{...{ goBack, goForward, paginationIndex, canGoForward }}
			/>
		</RestaurantsTheme>
	)
}

export default Restaurants

const RestaurantsTheme = styled.div`
	animation: list 3s ease-out forwards;
	transform-origin: top;
	width: ${props => props.theme.layout.contentwidth};

	@keyframes list {
		0% {
			transform: scaleY(0);
		}
		100% {
			transform: scaleY(1);
		}
	}

	.no-results {
		background: ${props => props.theme.color.white};
		font-weight: ${props => props.theme.font.weight.light};
		padding: ${props => props.theme.spacing.xlarge};
		text-align: center;
		width: ${props => props.theme.layout.contentwidth};
	}
`

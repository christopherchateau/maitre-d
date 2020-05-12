import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../contexts/DataContext'
import Row from './Row'
import PaginationControls from './PaginationControls'
import styled from 'styled-components'

const Restaurants = () => {
	const { filters, filteredRestaurants } = useContext(DataContext)

	const [paginationIndex, setPaginationIndex] = useState(0)

	const filteredByState = filters.state
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
			{!displayRestaurants.length && filteredByState

				? <h3 className='no-states-msg'>
					No Results Found In This State
				</h3>

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
	max-width: ${props => props.theme.layout.maxwidth};
	transform-origin: top;
	width: ${props => props.theme.layout.contentwidth};

	@keyframes list {
		0% {
			transform:scaleY(0);
		}
		100% {
			transform:scaleY(1);
		}
	}

	.no-states-msg {
		background: ${props => props.theme.color.white};
		font-weight: ${props => props.theme.font.weight.light};
		padding: ${props => props.theme.spacing.xlarge};
		text-align: center;
		width: 100%;
	}
`

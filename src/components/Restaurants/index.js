import React, { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'

const Restaurants = () => {
	const { filters, filteredRestaurants } = useContext(DataContext)

	const displayRestaurants = filteredRestaurants()
	const filteredByState = !!filters.state

	return (
		<RestaurantsTheme>
			{!displayRestaurants.length && filteredByState ? (
				<h3 className='row-item no-states-msg'>
					No Results Found In This State
				</h3>
			) : (
				displayRestaurants.map(
					({ name, city, state, telephone, genre }) => {
						return (
							<div className='row' key={telephone}>
								<h3 className='row-item'>{name}</h3>
								<h3 className='row-item'>{`${city}, ${state}`}</h3>
								<h3 className='row-item'>{telephone}</h3>
								<h3 className='row-item'>{genre.join(', ')}</h3>
							</div>
						)
					}
				)
			)}
		</RestaurantsTheme>
	)
}

export default Restaurants

const RestaurantsTheme = styled.div`
	background: ${props => props.theme.color.white};
	max-width: ${props => props.theme.layout.maxwidth};
	width: ${props => props.theme.layout.contentwidth};

	.row {
		align-items: center;
		border-bottom: 1px solid ${props => props.theme.color.darkgrey};
		display: flex;
		justify-content: space-between;

		&:last-child {
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

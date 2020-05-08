import React, { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'

const Restaurants = () => {
	const { restaurants } = useContext(DataContext)

	return (
		<RestaurantsTheme>
			{restaurants.map(({ name, city, state, telephone, genre }) => {
                const genres = typeof genre === 'string' ? [genre] : genre

                return (
					<div className='row'>
						<h3 className='row-item'>{name}</h3>
						<h3 className='row-item'>{`${city}, ${state}`}</h3>
						<h3 className='row-item'>{telephone}</h3>
						<h3 className='row-item'>{genres.join(' ')}</h3>
					</div>
				)
			})}
		</RestaurantsTheme>
	)
}

export default Restaurants

const RestaurantsTheme = styled.div`
	background: ${props => props.theme.color.white};
	max-width: ${props => props.theme.layout.maxwidth};
	width: 90%;

	.row {
		align-items: center;
		border: 1px solid grey;
		display: flex;
		justify-content: space-between;

		.row-item {
			font-weight: ${props => props.theme.font.weight.light};
			margin: 0;
			padding: ${props => props.theme.spacing.xlarge} ${props => props.theme.spacing.medium};
			text-align: center;
			width: 25%;
		}
	}
`

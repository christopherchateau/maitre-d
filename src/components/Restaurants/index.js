import React from 'react'
import styled from 'styled-components'

const Restaurants = () => (
	<RestaurantsTheme>
	</RestaurantsTheme>
)

export default Restaurants

const RestaurantsTheme = styled.div`
    background: ${props => props.theme.color.lightgrey};
    height: 16rem;
    width: 80%;
    max-width: ${props => props.theme.layout.maxwidth};
`

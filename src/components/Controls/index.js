import React, { useContext, useState, useRef } from 'react'
import styled from 'styled-components'

const Controls = () => {
	const [searchInput, setSearchInput] = useState('')

	const handleInputChange = e => {
		setSearchInput(e.target.value)
	}

	return (
		<ControlsTheme>
			<input
				onChange={handleInputChange}
				value={searchInput}
				className='search-input'
				type='text'
				placeholder='search...'
			/>
			<button className='search-btn'>search</button>
		</ControlsTheme>
	)
}

export default Controls

const ControlsTheme = styled.form`
	background: ${props => props.theme.color.white};
	max-width: ${props => props.theme.layout.maxwidth};
	padding: ${props => props.theme.spacing.medium};
	width: 80%;

	.search-input {
		font-size: ${props => props.theme.font.size.large};
	}

	.search-btn {
		font-size: ${props => props.theme.font.size.large};
	}
`

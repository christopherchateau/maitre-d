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
		</ControlsTheme>
	)
}

export default Controls

const ControlsTheme = styled.form`
	background: ${props => props.theme.color.white};
	height: 3.6rem;
	width: 80%;
	max-width: ${props => props.theme.layout.maxwidth};
`

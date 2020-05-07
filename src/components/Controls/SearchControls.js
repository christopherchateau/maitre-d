import React, { useContext, useState } from 'react'
import styled from 'styled-components'

const SearchControls = () => {
	const [searchInput, setSearchInput] = useState('')

	const handleInputChange = e => {
		setSearchInput(e.target.value)
	}

	return (
		<SearchControlsTheme>
			<input
				onChange={handleInputChange}
				value={searchInput}
				type='text'
				placeholder='search...'
			/>
			<button>search</button>
		</SearchControlsTheme>
	)
}

export default SearchControls

const SearchControlsTheme = styled.div`
	input {
		font-size: ${props => props.theme.font.size.large};
	}

	button {
		font-size: ${props => props.theme.font.size.large};
	}
`

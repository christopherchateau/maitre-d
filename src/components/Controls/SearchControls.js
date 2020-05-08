import React, { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'

const SearchControls = () => {
	const { search, setSearch } = useContext(DataContext)

	const handleInputChange = e => {
		setSearch(e.target.value)
	}

	return (
		<SearchControlsTheme>
			<input
				onChange={handleInputChange}
				value={search}
				type='text'
				placeholder='search...'
			/>
			<button>search</button>
		</SearchControlsTheme>
	)
}

export default SearchControls

const SearchControlsTheme = styled.div`
	margin: ${props => props.theme.spacing.small};

	input {
		font-size: ${props => props.theme.font.size.large};
		padding: ${props => props.theme.spacing.small};
	}

	button {
		font-size: ${props => props.theme.font.size.large};
		padding: ${props => props.theme.spacing.small};
	}
`

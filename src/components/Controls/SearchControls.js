import React, { useContext, useState } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'

const SearchControls = () => {
	const { setSearch } = useContext(DataContext)

	const [input, setInput] = useState('')

	const handleInputChange = e => {
		const currentInput = e.target.value

		setInput(currentInput)
		if (!currentInput) setSearch(input)
	}

	const handleSubmit = e => {
		e.preventDefault()
		setSearch(input)
	}

	return (
		<SearchControlsTheme onSubmit={handleSubmit}>
			<input
				onChange={handleInputChange}
				value={input}
				type='text'
				placeholder='search...'
			/>
			<button>search</button>
		</SearchControlsTheme>
	)
}

export default SearchControls

const SearchControlsTheme = styled.form`
	margin: ${props => props.theme.spacing.small};

	input {
		font-size: ${props => props.theme.font.size.large};
		padding: ${props => props.theme.spacing.small};
	}

	button {
		cursor: pointer;
		font-size: ${props => props.theme.font.size.large};
		padding: ${props => props.theme.spacing.small};
		transition: all 0.5s ease-out;

		&:hover {
			background: ${props => props.theme.color.darkgrey};
			color: ${props => props.theme.color.white};
			transition: all 0.5s ease-out;
		}
	}
`

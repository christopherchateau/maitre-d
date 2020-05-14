import React, { useContext, useState } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'

const SearchControls = () => {
	const { setSearch } = useContext(DataContext)

	const [input, setInput] = useState('')

	const handleInputChange = e => {
		const currentInput = e.target.value

		setInput(currentInput)
		if (!currentInput.length) setSearch('')
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
			<button disabled={!input}>search</button>
		</SearchControlsTheme>
	)
}

export default SearchControls

const SearchControlsTheme = styled.form`
	margin: ${props => props.theme.spacing.small};

	input,
	button {
		font-size: ${props => props.theme.font.size.large};
		padding: ${props => props.theme.spacing.small};

		@media (max-width: ${props => props.theme.breakpoint.desktop}) {
			font-size: ${props => props.theme.font.size.medium};
		}

		@media (max-width: ${props => props.theme.breakpoint.smallphone}) {
			margin: auto 5%;
			width: 90%;

			&:last-child {
				margin-top: ${props => props.theme.spacing.medium};
			}
		}
	}

	button {
		transition: all 0.5s ease-out;

		&:hover:enabled {
			background: ${props => props.theme.color.darkgrey};
			color: ${props => props.theme.color.white};
			cursor: pointer;
			transition: all 0.5s ease-out;
		}
	}
`

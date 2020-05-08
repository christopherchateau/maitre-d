import React, { useContext, useState, useEffect, useRef } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styled from 'styled-components'
import { defaultOptions } from './data'
import { sortByKey } from '../../utilities/helper'

const DropDown = ({ menuName }) => {
	const { restaurants, updateFilter } = useContext(DataContext)

	const [selectedItem, setSelectedItem] = useState('')

	const dropdownRef = useRef()

	useEffect(() => {
		updateFilter(menuName, selectedItem)
	}, [selectedItem])

	const handleSelection = option =>
		option === 'All' ? setSelectedItem('') : setSelectedItem(option)

	const generateMenu = () => {
		const menuOptions = []
		let formattedMenu = defaultOptions[menuName]
			? defaultOptions[menuName].map(option => formatMenuOption(option))
			: restaurants.reduce((formattedMenu, restaurant) => {
					let values = restaurant[menuName]
					if (typeof values === 'string') values = [values]

					values.forEach(val => {
						const value = capitalizeFirstChar(val)

						if (!menuOptions.includes(value)) {
							menuOptions.push(value)
							formattedMenu.push(formatMenuOption(value))
						}
					})

					return formattedMenu
			  }, [])

		return [formatMenuOption('All'), ...sortByKey(formattedMenu)]
	}

	const formatMenuOption = str => (
		<option value={str} key={str}>
			{str}
		</option>
	)

	const capitalizeFirstChar = input =>
		input
			.split(' ')
			.map(
				str =>
					str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
			)
			.join(' ')

	return (
		<DropDownTheme>
			<h3 className='menu-name'>{capitalizeFirstChar(menuName) + ':'}</h3>
			<select
				onChange={() => handleSelection(dropdownRef.current.value)}
				ref={dropdownRef}
				value={selectedItem}>
				{generateMenu()}
			</select>
		</DropDownTheme>
	)
}

export default DropDown

const DropDownTheme = styled.div`
	align-items: center;
	display: flex;
	margin-top: ${props => props.theme.spacing.medium};
	margin-right: ${props => props.theme.spacing.large};

	.menu-name {
		font-size: ${props => props.theme.font.size.large};
		font-weight: ${props => props.theme.font.weight.light};
		margin: ${props => props.theme.spacing.small};
		margin-right: ${props => props.theme.spacing.medium};
	}

	select {
		font-size: ${props => props.theme.font.size.medium};
		height: 3rem;
		max-width: 10rem;
		padding: ${props => props.theme.spacing.small};
	}
`

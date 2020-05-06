import React from 'react'
import styled from 'styled-components'

const Controls = () => (
	<ControlsTheme>

	</ControlsTheme>
)

export default Controls

const ControlsTheme = styled.div`
    background: ${props => props.theme.color.lightgrey};
    height: 3.6rem;
    width: 80%;
    max-width: ${props => props.theme.layout.maxwidth};
`

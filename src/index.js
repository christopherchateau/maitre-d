import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import DataContextProvider from './contexts/DataContext'
import { ThemeProvider } from 'styled-components'
import theme from './theme.js'
import * as serviceWorker from './serviceWorker'
import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<DataContextProvider>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</DataContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

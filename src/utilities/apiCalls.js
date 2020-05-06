const endpoint = 'https://code-challenge.spectrumtoolbox.com/api'
const apiKey = 'Api-Key q3MNxtfep8Gt'

export const getRestaurants = async () => {
	try {
		const response = await fetch(`${endpoint}/restaurants`, {
			headers: { Authorization: apiKey },
		})
		return await response.json()
	} catch {
		return { errors: ['Data failed to load'] }
	}
}

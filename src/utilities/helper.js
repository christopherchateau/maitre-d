export const formatFetchedData = data => {
	const standardizeText = ['city', 'tags', 'attire', 'genre']

	data.forEach(item => {
		Object.keys(item).forEach(key => {

			// covert all values into arrays
			item[key] = item[key].split(',')

			// standardize capitalization and alphabetize specific values
			if (standardizeText.includes(key))
				item[key] = item[key]
					.map(str => capitalizeFirstChar(str))
					.sort()
		})
	})

	return sortByKey(data, 'name')
}

export const sortByKey = (data, key = 'key') =>
	data.sort((a, b) => (a[key] < b[key] ? -1 : 1))

export const capitalizeFirstChar = input =>
	input
		.split(' ')
		.map(str => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase())
		.join(' ')

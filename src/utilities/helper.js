export const formatFetchedData = data => {
	data.forEach(item => {
		Object.keys(item).forEach(key => {
			// make listed items into arrays
			if (/,/.test(item[key])) item[key] = item[key].split(',')
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

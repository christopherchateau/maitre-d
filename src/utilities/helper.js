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

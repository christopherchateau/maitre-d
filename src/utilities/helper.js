export const formatFetchedData = data => {
	data.forEach(item => {
		Object.keys(item).map(key => (item[key] = item[key].split(',')))
	})

	return sortByKey(data, 'name')
}

export const sortByKey = (data, key = 'key') =>
	data.sort((a, b) => (a[key] < b[key] ? -1 : 1))

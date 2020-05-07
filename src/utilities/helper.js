export const formatFetchedData = data => {
	data.forEach(item => {

		Object.keys(item).map(key => {
			if (/,/.test(item[key])) {
				item[key] = item[key].split(',')
			}
		})
	})

	return sortByName(data)
}

const sortByName = input => input.sort((a, b) => (a.name < b.name ? -1 : 1))

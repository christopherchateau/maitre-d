export const formatFetchedData = data => {
    data.forEach(item =>
        Object.keys(item).map(key =>
            formatLists(item[key])
        )
    )
	return sortByName(data)
}

const formatLists = value =>
    /,/.test(value)
        ? value.split(',')
        : value

const sortByName = input =>
    input.sort((a, b) =>
        (a.name < b.name ? -1 : 1)
    )

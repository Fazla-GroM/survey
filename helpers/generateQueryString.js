const generateQueryString = query => {
    const searchParams = new URLSearchParams(query).toString()

    const queryString = !!searchParams ? `?${searchParams}` : ''

    return queryString
}

export default generateQueryString

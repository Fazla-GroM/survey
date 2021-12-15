/**
 * It generates a query string when provided object with valid key value pairs
 *
 * @param {Object} query
 * @return {string}  a query string
 */
const generateQueryString = query => {
    const searchParams = new URLSearchParams(query).toString()

    const queryString = !!searchParams ? `?${searchParams}` : ''

    return queryString
}

export default generateQueryString

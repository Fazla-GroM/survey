import { generateQueryString } from 'helpers'
import getConfig from 'next/config'

//@NOTE: This could be more complex solution eg. singleton as only source of truth for data fetching
//but there is no need for app of this complexity

const { publicRuntimeConfig } = getConfig()

const baseURL = `${publicRuntimeConfig.apiBaseUrl}/${publicRuntimeConfig.apiPrefix}`

const defaultHeaders = {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json'
}

/**
 * A method for fetching data.
 * It supports searchParams
 *
 * @param {string} resource
 * @param {Object} [params={}]
 * @param {Object} params.query searchParams Object
 * @return {Promise}
 */
const fetchData = async (resource, params = {}) => {
    try {
        const { query } = params

        const queryString = generateQueryString(query)

        const response = await fetch(`${baseURL}/${resource}${queryString}`, {
            headers: defaultHeaders
        })

        const data = await response.json()

        if (!response.ok) {
            throw data
        }

        return data?.data
    } catch (error) {
        //do something with it eg. log or sentry and rethrow it
        throw error
    }
}

/**
 * A method for posting data.
 * Body param is mandatory.
 * It supports searchParams
 *
 * @param {*} resource
 * @param {*} [params={}]
 * @param {Object} params.body a valid body property
 * @param {Object} params.query searchParams Object
 *
 * @return {Promise}
 */
const postData = async (resource, params = {}) => {
    try {
        const { body, query } = params

        const queryString = generateQueryString(query)

        if (!body) {
            throw new Error('Param body is required for POST request')
        }

        const response = await fetch(`${baseURL}/${resource}${queryString}`, {
            headers: defaultHeaders,
            method: 'POST',
            body: JSON.stringify(body)
        })

        const data = await response.json()

        if (!response.ok) {
            //in this case this is error response data
            throw data
        }

        return data?.data
    } catch (error) {
        //do something with it eg. log or sentry and rethrow it
        throw error
    }
}

export { fetchData, postData }

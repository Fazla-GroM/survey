import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const baseURL = `${publicRuntimeConfig.apiBaseUrl}/${publicRuntimeConfig.apiPrefix}`

const defaultHeaders = {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json'
}

const fetchData = async (resource, params = {}) => {
    try {
        const response = await fetch(`${baseURL}/${resource}`, {
            headers: defaultHeaders
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data?.message)
        }

        return data?.data
    } catch (error) {
        //do something with it eg. log or sentry
        throw new Error(error)
    }
}

const postData = async (resource, params = {}) => {
    try {
        const { body, ...restParams } = params

        if (!body) {
            throw new Error('Param body is required for POST request')
        }

        const response = await fetch(`${baseURL}/${resource}`, {
            headers: defaultHeaders,
            method: 'POST',
            body: JSON.stringify(body)
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data?.message)
        }

        return data?.data
    } catch (error) {
        //do something with it eg. log or sentry
        throw new Error(error)
    }
}

export { fetchData, postData }

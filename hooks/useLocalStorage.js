/* eslint-disable no-console */
import { useEffect, useState } from 'react'

/**
 * A simple hook for storing stuff in local storage
 *
 * @param {*} key
 * @param {*} initialValue
 * @return {*}
 */
const useLocalStorage = (key, initialValue) => {
    const stored = typeof window !== 'undefined' && localStorage.getItem(key)
    const initial = stored ? JSON.parse(stored) : initialValue
    const [value, setValue] = useState(initial)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export default useLocalStorage

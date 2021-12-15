/**
 * A simple range generator which returns generated array of numbers
 *
 * @param {number} min
 * @param {number} max
 * @param {number} [step=1]
 * @return {number[]}
 */
const generateRange = (min, max, step = 1) => {
    const arr = []

    for (let i = min; i <= max; i += step) {
        arr.push(i)
    }

    return arr
}

export default generateRange

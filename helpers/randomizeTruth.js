/**
 * A method which returns "random" boolean.
 * steps go from 0 to 1 where 0 is always false and 1 is always true
 *
 * @example
 * randomizeTruth(0.1) 10% probability for true
 * randomizeTruth(0.5) 50% probability for true
 * randomizeTruth(0.9) 90% probability for true
 *
 * @param {number} step
 * @return {boolean}
 */
const randomizeTruth = step => {
    return Math.random() < step
}

export default randomizeTruth

/**
 * A makeshift pointer parser.
 * it takes a pointer and an object, which hopefully pointer represents, and parses value from it
 *
 * @param {Object} [obj={}]
 * @param {string} [pointer='']
 * @return {*}
 */
const getPointerValue = (obj = {}, pointer = '') => {
    const pointerArr = pointer.split('/')

    const pointerValue = pointerArr?.reduce(
        (acc, item) => {
            acc = acc[item]

            return acc
        },
        { ...obj }
    )

    return pointerValue
}

export default getPointerValue

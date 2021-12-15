/**
 * a simple number checker and transformer
 *
 * @param {*} num
 * @return {*}
 */
const toNumber = num => {
    const maybeNumber = Number(num)

    if (Number.isNaN(maybeNumber)) {
        return undefined
    }

    return maybeNumber
}

export default toNumber

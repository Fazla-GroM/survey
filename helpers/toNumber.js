const toNumber = num => {
    const maybeNumber = Number(num)

    if (Number.isNaN(maybeNumber)) {
        return undefined
    }

    return maybeNumber
}

export default toNumber

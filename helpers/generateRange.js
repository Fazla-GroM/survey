const generateRange = (min, max, step = 1) => {
    const arr = []

    for (let i = min; i <= max; i += step) {
        arr.push(i)
    }

    return arr
}

export default generateRange

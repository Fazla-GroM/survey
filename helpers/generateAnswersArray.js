const generateAnswersArray = dataObj => {
    return Object.entries(dataObj || {}).map(([key, value]) => ({
        questionId: key,
        answer: value
    }))
}

export default generateAnswersArray

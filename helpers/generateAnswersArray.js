/**
 * It generates an array of answer objects based on recieved form data
 *
 * @param {Object} dataObj
 * @return {Array}
 */
const generateAnswersArray = dataObj => {
    return Object.entries(dataObj || {}).map(([key, value]) => ({
        questionId: key,
        answer: value
    }))
}

export default generateAnswersArray

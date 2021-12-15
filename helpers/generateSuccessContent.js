/**
 * A simple content generator which generates content based on valid questions and answers array
 *
 * @param {Object[]} questions
 * @param {Object[]} answers
 * @return {Object[]}
 */
const createSuccessContent = (questions, answers) => {
    return questions?.reduce((acc, question) => {
        const foundAnswer = answers?.find(answer => answer?.questionId === question?.questionId)

        if (foundAnswer) {
            acc.push({
                questionId: question?.questionId,
                label: question?.label,
                answer: foundAnswer?.answer
            })
        }
        return acc
    }, [])
}

export default createSuccessContent

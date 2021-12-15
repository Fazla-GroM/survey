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

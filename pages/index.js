import { Flex, Container, Text, Paper, FilledButton, FormInputResolver } from 'components'
import { generateAnswersArray, generateSuccessContent, getPointerValue } from 'helpers'
import { useInnerHtml, useLocalStorage } from 'hooks'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useQuery, useMutation } from 'react-query'
import { fetchData, postData } from 'services'
import { useCallback } from 'react'
import { useUIDSeed } from 'react-uid'

const HomePage = () => {
    const uuid = useUIDSeed()
    const router = useRouter()
    const [_successContent, setSuccessContent] = useLocalStorage('successContent', '')

    //form handler
    const { register, handleSubmit, formState, setError, clearErrors } = useForm({
        mode: 'onChange'
    })

    const { errors: formErrors, isValid, isSubmitting } = formState

    //fetch survey data
    const {
        data: surveyData,
        isError: surveyDataHasError,
        isSuccess: surveyDataFetchIsSuccess,
        error: surveyError
    } = useQuery(['survey'], () => fetchData('survey'), {
        retry: false
    })

    //safely parse html
    const formMessageHtmlProps = useInnerHtml(surveyData?.attributes?.description)

    const { mutate } = useMutation(
        dataToPost =>
            postData(`survey/${surveyData?.id}/answers`, {
                body: dataToPost,
                query: {
                    include: 'survey'
                }
            }),
        {
            onSuccess(newData) {
                setSuccessContent(
                    generateSuccessContent(surveyData?.attributes?.questions, newData?.attributes?.answers)
                )

                router.push('/success')
            },
            onError(error, failedPostData) {
                error?.errors?.forEach(err => {
                    const { detail, source } = err
                    const pointerValue = getPointerValue(failedPostData, source)
                    if (pointerValue) {
                        setError(pointerValue, { message: detail })
                    } else {
                        setError('form', { message: detail })
                    }
                })
            }
        }
    )

    const onSubmit = useCallback(
        formData => {
            const requestObject = {
                data: {
                    type: 'surveyAnswers',
                    attributes: {
                        answers: generateAnswersArray(formData)
                    }
                }
            }

            mutate(requestObject)
        },
        [mutate]
    )

    const FormFields = useCallback(() => {
        const formSchema = surveyData?.attributes?.questions
        if (!formSchema) {
            return null
        }

        return formSchema?.map(options => (
            <FormInputResolver key={options?.questionId} options={options} register={register} errors={formErrors} />
        ))
    }, [surveyData?.attributes?.questions, register, formErrors])

    return (
        <>
            <Container as="section" maxWidth="fluid" align="center" justify="center" css={{ height: '100vh' }}>
                <Paper bgColor="transparent" elevation="none" gap="4">
                    <Text
                        align="center"
                        as="h1"
                        size={{
                            '@initial': 'heading2',
                            '@bp1': 'heading1'
                        }}
                        weight="bold"
                    >
                        MovieFest
                    </Text>
                    <Text size="heading6" color="secondary" align="center">
                        Your favorite movie festival is back!
                    </Text>
                </Paper>
            </Container>
            {surveyDataHasError && (
                <Container as="section" align="center">
                    <Paper size="2" bgColor="glass" gap="7" align="center">
                        <Flex direction="column" gap="4" align="center">
                            <Text
                                align="center"
                                headingDecorator
                                as="h2"
                                size={{
                                    '@initial': 'heading3',
                                    '@bp1': 'heading2'
                                }}
                                weight="semiBold"
                            >
                                SuMtInG wOnG!
                            </Text>
                            {Array.isArray(surveyError?.errors) ? (
                                surveyError.errors.map((err, index) => (
                                    <Text key={uuid(index)} color="red">
                                        {err?.detail}
                                    </Text>
                                ))
                            ) : (
                                <Text color="red">Something went wrong!</Text>
                            )}
                        </Flex>
                    </Paper>
                </Container>
            )}
            {surveyDataFetchIsSuccess && (
                <Container as="section" align="center">
                    <Paper size="2" bgColor="glass" gap="7" align="center">
                        <Flex direction="column" gap="4" align="center">
                            <Text
                                align="center"
                                headingDecorator
                                as="h2"
                                size={{
                                    '@initial': 'heading3',
                                    '@bp1': 'heading2'
                                }}
                                weight="semiBold"
                            >
                                {surveyData?.attributes?.title}
                            </Text>
                            <Text as="div" align="center" {...formMessageHtmlProps} />
                        </Flex>
                        <Flex
                            autoComplete="off"
                            as="form"
                            direction="column"
                            gap="9"
                            align="center"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <Flex direction="column" gap="7">
                                <FormFields />
                            </Flex>
                            <Flex direction="column" gap="4" align="center">
                                <Flex>
                                    {formErrors?.form ? (
                                        <FilledButton
                                            color="orange"
                                            type="button"
                                            onClick={e => {
                                                e.preventDefault()
                                                clearErrors('form')
                                            }}
                                        >
                                            Try Again?
                                        </FilledButton>
                                    ) : (
                                        <FilledButton type="submit" disabled={isSubmitting || !isValid}>
                                            Submit
                                        </FilledButton>
                                    )}
                                </Flex>
                                {formErrors?.form?.message && (
                                    <Text color="red" size="small">
                                        {formErrors.form.message}
                                    </Text>
                                )}
                            </Flex>
                        </Flex>
                    </Paper>
                </Container>
            )}
        </>
    )
}

export default HomePage

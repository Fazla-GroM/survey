import { Flex, Container, Text, Paper, Form } from 'components'
import { generateAnswersArray, generateSuccessContent } from 'helpers'
import { useInnerHtml, useLocalStorage } from 'hooks'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from 'react-query'
import { fetchData, postData } from 'services'

const HomePage = () => {
    const router = useRouter()

    const [_successContent, setSuccessContent] = useLocalStorage('successContent', '')
    //fetch survey data
    const { data } = useQuery(['survey'], () => fetchData('survey'))
    //safely parse html
    const formMessageHtmlProps = useInnerHtml(data?.attributes?.description)

    const { mutate } = useMutation(
        dataToPost =>
            postData(`survey/${data?.id}/answers`, {
                body: dataToPost,
                query: {
                    include: 'survey'
                }
            }),
        {
            onSuccess(newData) {
                console.log(newData)
                setSuccessContent(generateSuccessContent(data?.attributes?.questions, newData?.attributes?.answers))

                router.push('/success')
            },
            onError(error, newData) {
                //do something with error
                console.error(error)
            }
        }
    )

    const onSubmit = formData => {
        const requestObject = {
            data: {
                type: 'surveyAnswers',
                attributes: {
                    answers: generateAnswersArray(formData)
                }
            }
        }

        mutate(requestObject)
    }

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
                            {data?.attributes?.title}
                        </Text>
                        <Text as="div" align="center" {...formMessageHtmlProps} />
                    </Flex>
                    <Form formSchema={data?.attributes?.questions} onSubmit={onSubmit} />
                </Paper>
            </Container>
        </>
    )
}

export default HomePage

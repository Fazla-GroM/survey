import { Container, Paper, Text, Flex } from 'components'
import { useLocalStorage } from 'hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const SuccessPage = () => {
    const { push } = useRouter()
    const [successContent] = useLocalStorage('successContent')

    useEffect(() => {
        if (!successContent) {
            push('/')
        }
    }, [push, successContent])

    return (
        <Container as="section" gradientBackground maxWidth="fluid" align="center" justify="center" css={{ flex: 1 }}>
            <Paper bgColor="glass" size="2" align="center" gap="7">
                <Flex>
                    <Text
                        align="center"
                        headingDecorator
                        as="h1"
                        size={{
                            '@initial': 'heading3',
                            '@bp1': 'heading2'
                        }}
                        weight="semiBold"
                    >
                        Thank you!
                    </Text>
                </Flex>
                <Flex direction="column" gap="6">
                    {Array.isArray(successContent) &&
                        successContent?.map(content => (
                            <Flex key={content?.questionId} direction="column" align="center" gap="3">
                                {content?.label && (
                                    <Text
                                        align="center"
                                        size={{
                                            '@initial': 'default',
                                            '@bp1': 'heading6'
                                        }}
                                    >
                                        {content?.label}
                                    </Text>
                                )}
                                {content?.answer && (
                                    <Text align="center" color="green" weight="bold">
                                        {content?.answer}
                                    </Text>
                                )}
                            </Flex>
                        ))}
                </Flex>
            </Paper>
        </Container>
    )
}

export default SuccessPage

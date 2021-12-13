import { Flex, Container, Text, Paper, TextField, Fieldset, RadioField, FilledButton } from 'components'

const HomePage = () => {
    return (
        <>
            <Container
                as="section"
                gradientBackground
                maxWidth="fluid"
                align="center"
                justify="center"
                css={{ height: '100vh' }}
            >
                <Paper bgColor="transparent" elevation="none" gap="4">
                    <Text align="center" as="h1" size="heading1" weight="bold">
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
                        <Text align="center" headingDecorator as="h2" size="heading2" weight="semiBold">
                            Help us!
                        </Text>
                        <Text align="center">With your feedback we can create even better experience for you!</Text>
                    </Flex>
                    <Flex direction="column">
                        <TextField label="Test label" />
                    </Flex>
                    <Fieldset legend="Legend label">
                        <RadioField id={1} name="rating" value="1" label="1" />
                        <RadioField id={2} name="rating" value="2" label="2" />
                        <RadioField id={3} name="rating" value="3" label="3" />
                        <RadioField id={4} name="rating" value="4" label="4" />
                        <RadioField id={5} name="rating" value="5" label="5" />
                    </Fieldset>
                    <FilledButton type="submit">Submit</FilledButton>
                </Paper>
            </Container>
        </>
    )
}

export default HomePage

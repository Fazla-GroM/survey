import { Container, Text } from 'components/base'

const Footer = () => {
    return (
        <Container as="footer" maxWidth="fluid" px="3" py="2" direction="row" justify="center" align="center">
            <Text size="small">&copy; MovieFest {new Date().getFullYear()}</Text>
        </Container>
    )
}

export { Footer }

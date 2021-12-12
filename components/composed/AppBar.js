import { AvatarIcon } from '@radix-ui/react-icons'
import { Container, Flex, IconButton } from 'components/base'
import { Logo } from 'components/composed/Logo'
import { Navigation } from 'components/composed/Navigation'

const AppBar = () => {
    return (
        <Container as="header" maxWidth="fluid" px="3" py="1" direction="row" align="center" justify="between">
            <Logo />
            <Flex align="center" gap="5">
                <Navigation />
                <IconButton>
                    <AvatarIcon width="24" height="24" />
                </IconButton>
            </Flex>
        </Container>
    )
}

export { AppBar }

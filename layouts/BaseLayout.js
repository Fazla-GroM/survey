import { Flex, AppBar, Footer } from 'components'

const BaseLayout = ({ children }) => {
    return (
        <Flex direction="column" css={{ minHeight: '100vh' }}>
            <AppBar />
            <Flex as="main" direction="column" css={{ flex: 1 }}>
                {children}
            </Flex>
            <Footer />
        </Flex>
    )
}

export default BaseLayout

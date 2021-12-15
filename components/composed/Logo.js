import { CameraIcon } from '@radix-ui/react-icons'
import { Flex, Text } from 'components/base'
import { styled } from 'stitches'
import { Link } from 'components/composed/Link'

const LogoContainer = styled(Flex, {
    borderRadius: '100px',
    width: '$48',
    height: '$48',
    linearGradient: '120deg, $cyan, $purple'
})

const Logo = () => {
    return (
        <Link href="/">
            <Flex as="a" align="center" gap="4" css={{ color: 'inherit', textDecoration: 'none' }}>
                <LogoContainer align="center" justify="center">
                    <CameraIcon width="24" height="24" />
                </LogoContainer>
                <Text
                    size="heading5"
                    weight="bold"
                    css={{
                        display: 'none',

                        '@bp1': {
                            display: 'block'
                        }
                    }}
                >
                    MovieFest
                </Text>
            </Flex>
        </Link>
    )
}

export { Logo }

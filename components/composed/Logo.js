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

const Logo = ({ showText = true }) => {
    return (
        <Link href="/">
            <Flex as="a" align="center" gap="4" css={{ color: 'inherit', textDecoration: 'none' }}>
                <LogoContainer align="center" justify="center">
                    <CameraIcon width="24" height="24" />
                </LogoContainer>
                {showText && (
                    <Text size="heading5" weight="bold">
                        MovieFest
                    </Text>
                )}
            </Flex>
        </Link>
    )
}

export { Logo }

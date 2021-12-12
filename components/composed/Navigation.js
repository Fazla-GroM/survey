import { Flex, UnderlinedButton } from 'components/base'
import { Link } from 'components/composed/Link'

const Navigation = () => {
    return (
        <Flex as="nav" gap="4" align="center">
            <Link href="/about" useActiveState>
                <UnderlinedButton as="a">About</UnderlinedButton>
            </Link>
            <Link href="/schedule" useActiveState>
                <UnderlinedButton as="a">Schedule</UnderlinedButton>
            </Link>
        </Flex>
    )
}

export { Navigation }

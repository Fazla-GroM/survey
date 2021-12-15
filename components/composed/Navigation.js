import { Flex, UnderlinedButton } from 'components/base'
import { Link } from 'components/composed/Link'

const Navigation = () => {
    return (
        <Flex
            as="nav"
            gap={{
                '@initial': '2',
                '@bp1': '4'
            }}
            align="center"
        >
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

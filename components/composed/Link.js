import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, Children, useMemo } from 'react'

const Link = ({ href, useActiveState = false, children }) => {
    const { pathname } = useRouter()
    const isActive = pathname === href

    return (
        <NextLink passHref href={href}>
            {!!useActiveState ? cloneElement(Children.only(children), { isActive }) : Children.only(children)}
        </NextLink>
    )
}

export { Link }

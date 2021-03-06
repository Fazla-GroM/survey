import { styled } from 'stitches'
import { Flex } from './Flex'

const Container = styled(Flex, {
    mx: 'auto',
    width: '100%',
    position: 'relative',

    variants: {
        maxWidth: {
            fluid: {
                maxWidth: 'none'
            },
            1: {
                maxWidth: '133.5rem'
            }
        },
        px: {
            none: {
                px: 'none'
            },
            1: {
                px: '$8'
            },
            2: {
                px: '$16'
            },
            3: {
                px: '$24'
            },
            4: {
                px: '$64'
            }
        },
        py: {
            none: {
                py: 'none'
            },
            1: {
                py: '$8'
            },
            2: {
                py: '$16'
            },
            3: {
                py: '$24'
            },
            4: {
                py: '$64'
            }
        },
        gradientBackground: {
            true: {
                radialGradient:
                    'circle at 15% 50%, #8be9fd33, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, #bd93f94d, rgba(255, 255, 255, 0) 25%'
            }
        }
    },
    defaultVariants: {
        direction: 'column',
        maxWidth: '1',
        px: '1',
        py: 'none'
    }
})

export { Container }

import { styled } from 'stitches'
import { Flex } from 'components/base/Flex'

const Paper = styled(Flex, {
    borderRadius: '$4',
    width: '100%',

    variants: {
        bgColor: {
            transparent: {
                backgroundColor: 'transparent'
            },
            default: {
                backgroundColor: '$greyLight'
            },
            glass: {
                backgroundColor: '#44475a4d',
                backdropFilter: 'blur(14px)'
            }
        },
        size: {
            none: {
                maxWidth: 'none'
            },
            1: {
                maxWidth: '41.6rem'
            },
            2: {
                maxWidth: '72rem'
            },
            3: {
                maxWidth: '96rem'
            },
            4: {
                maxWidth: '120rem'
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
        elevation: {
            none: {
                boxShadow: 'none'
            },
            1: {
                boxShadow: '$elevation1'
            },
            2: {
                boxShadow: '$elevation2'
            },
            3: {
                boxShadow: '$elevation3'
            },
            4: {
                boxShadow: '$elevation4'
            }
        }
    },
    defaultVariants: {
        direction: 'column',
        bgColor: 'default',
        size: '1',
        px: '3',
        py: '3',
        elevation: '1'
    }
})

export { Paper }

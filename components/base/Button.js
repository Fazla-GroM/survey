import { styled } from 'stitches'

const BaseButton = styled('button', {
    all: 'unset',
    position: 'relative',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    fontFamily: 'inherit',
    fontSize: '$default',
    fontWeight: '$500',
    cursor: 'pointer',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const IconButton = styled(BaseButton, {
    borderRadius: '100px',

    variants: {
        size: {
            default: {
                width: '$48',
                height: '$48'
            }
        },
        color: {
            default: {
                color: '$white',
                backgroundColor: 'transparent',
                transition: 'background-color 0.3s ease-in-out',
                '&:hover': {
                    backgroundColor: '$whiteHover'
                }
            }
        }
    },
    defaultVariants: {
        size: 'default',
        color: 'default'
    }
})

const UnderlinedButton = styled(BaseButton, {
    padding: '$8',

    '&::after': {
        content: "''",
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 0,
        height: '$2',
        linearGradient: '120deg, $cyan, $purple',
        borderRadius: '100px',
        transition: 'width 0.3s ease-in-out'
    },

    '&:hover::after': {
        width: '$16'
    },

    variants: {
        isActive: {
            true: {
                '&:hover::after': {
                    width: '100%'
                },

                '&::after': {
                    width: '100%'
                }
            }
        }
    }
})

const FilledButton = styled(BaseButton, {
    padding: '$8 $16',
    borderRadius: '$4',
    boxShadow: '$elevation1',
    transition: 'background-color 0.3s ease-in-out',

    variants: {
        color: {
            green: {
                backgroundColor: '$green',
                color: '$greyDark',

                '&:hover': {
                    backgroundColor: '$greenHover'
                }
            }
        }
    },
    defaultVariants: {
        color: 'green'
    }
})

export { IconButton, UnderlinedButton, FilledButton }

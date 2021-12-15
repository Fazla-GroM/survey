import { styled } from 'stitches'

const Text = styled('p', {
    display: 'block',
    position: 'relative',
    margin: 0,
    fontVariantNumeric: 'tabular-nums',

    variants: {
        size: {
            verySmall: {
                fontSize: '$verySmall'
            },
            small: {
                fontSize: '$small'
            },
            default: {
                fontSize: '$default'
            },
            heading1: {
                fontSize: '$heading1'
            },
            heading2: {
                fontSize: '$heading2'
            },
            heading3: {
                fontSize: '$heading3'
            },
            heading4: {
                fontSize: '$heading4'
            },
            heading5: {
                fontSize: '$heading5'
            },
            heading6: {
                fontSize: '$heading6'
            }
        },
        weight: {
            regular: {
                fontWeight: '$400'
            },
            semiBold: {
                fontWeight: '$600'
            },
            bold: {
                fontWeight: '$700'
            }
        },
        color: {
            primary: {
                color: '$textPrimary'
            },
            secondary: {
                color: '$textSecondary'
            },
            green: {
                color: '$green'
            }
        },
        align: {
            center: {
                textAlign: 'center'
            },
            left: {
                textAlign: 'left'
            },
            right: {
                textAlign: 'right'
            }
        },
        headingDecorator: {
            true: {
                '&::after': {
                    content: "''",
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '$4',
                    linearGradient: '120deg, $cyan, $purple',
                    borderRadius: '100px'
                }
            }
        }
    },
    defaultVariants: {
        size: 'default',
        color: 'primary',
        weight: 'regular',
        align: 'left'
    }
})

export { Text }

import { styled } from 'stitches'

const Text = styled('p', {
    display: 'block',
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
            }
        }
    },
    defaultVariants: {
        size: 'default',
        color: 'primary',
        weight: 'regular'
    }
})

export { Text }

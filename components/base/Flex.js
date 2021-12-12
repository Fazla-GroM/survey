import { styled } from 'stitches'

const Flex = styled('div', {
    boxSizing: 'border-box',
    display: 'flex',
    position: 'relative',

    variants: {
        direction: {
            row: {
                flexDirection: 'row'
            },
            column: {
                flexDirection: 'column'
            },
            rowReverse: {
                flexDirection: 'row-reverse'
            },
            columnReverse: {
                flexDirection: 'column-reverse'
            }
        },
        align: {
            start: {
                alignItems: 'flex-start'
            },
            center: {
                alignItems: 'center'
            },
            end: {
                alignItems: 'flex-end'
            },
            stretch: {
                alignItems: 'stretch'
            },
            baseline: {
                alignItems: 'baseline'
            }
        },
        justify: {
            start: {
                justifyContent: 'flex-start'
            },
            center: {
                justifyContent: 'center'
            },
            end: {
                justifyContent: 'flex-end'
            },
            between: {
                justifyContent: 'space-between'
            }
        },
        wrap: {
            noWrap: {
                flexWrap: 'nowrap'
            },
            wrap: {
                flexWrap: 'wrap'
            },
            wrapReverse: {
                flexWrap: 'wrap-reverse'
            }
        },
        gap: {
            1: {
                gap: '$2'
            },
            2: {
                gap: '$4'
            },
            3: {
                gap: '$8'
            },
            4: {
                gap: '$16'
            },
            5: {
                gap: '$24'
            },
            6: {
                gap: '$32'
            },
            7: {
                gap: '$40'
            },
            8: {
                gap: '$48'
            },
            9: {
                gap: '$56'
            }
        }
    },
    defaultVariants: {
        direction: 'row',
        align: 'stretch',
        justify: 'start',
        wrap: 'noWrap'
    }
})

export { Flex }

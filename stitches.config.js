import { createStitches, globalCss } from '@stitches/react'

//Global Css
const globalStyles = globalCss({
    '*,*::before,*::after': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },
    html: {
        width: '100%',
        fontSize: '$htmlFontSize',
        lineHeight: '1.15',
        textSizeAdjust: '100%'
    },
    body: {
        width: '100%',
        fontFamily: '$primary',
        fontSize: '$bodyFontSize',
        backgroundColor: '$background',
        color: '$textPrimary'
    },

    '#root': {
        width: '100%'
    }
})

//Theme
const { styled, keyframes, getCssText } = createStitches({
    theme: {
        colors: {
            greyDark: '#282a36',
            greyLight: '#44475a',
            cyan: '#8be9fd',
            green: '#50fa7b',
            greenHover: '#50fa7bcc',
            orange: '#ffb86c',
            pink: '#ff79c6',
            purple: '#bd93f9',
            red: '#ff5555',
            yellow: '#f1fa8c',
            white: '#f8f8f2',
            whiteOpaque: '#f8f8f299',
            whiteHover: '#f8f8f233',
            background: '$greyDark',
            textPrimary: '$white',
            textSecondary: '$whiteOpaque'
        },
        fontSizes: {
            htmlFontSize: '62.5%',
            bodyFontSize: '1.6rem',
            verySmall: '1.2rem',
            small: '1.4rem',
            default: '$bodyFontSize',
            heading1: '6.8rem',
            heading2: '4.2rem',
            heading3: '3.2rem',
            heading4: '2.8rem',
            heading5: '2.4rem',
            heading6: '2rem'
        },
        fonts: {
            primary: 'Avenir, Helvetica, Arial, sans-serif'
        },
        fontWeights: {
            300: 300,
            400: 400,
            500: 500,
            600: 600,
            700: 700
        },
        lineHeights: {},
        letterSpacings: {},
        space: {
            2: '0.2rem', //2px
            4: '0.4rem', //4px
            8: '0.8rem', //8px
            16: '1.6rem', //16px
            24: '2.4rem', //24px
            32: '3.2rem', //32px
            40: '4rem', //40px
            48: '4.8rem', //48px,
            56: '5.6rem', //56px
            64: '6.4rem'
        },
        sizes: {
            2: '0.2rem', //2px
            4: '0.4rem', //4px
            8: '0.8rem', //8px
            16: '1.6rem', //16px
            24: '2.4rem', //24px
            32: '3.2rem', //32px
            40: '4rem', //40px
            48: '4.8rem', //48px,
            56: '5.6rem', //56px
            64: '6.4rem',
            72: '7.2rem',
            80: '8rem'
        },
        borderWidths: {},
        borderStyles: {},
        radii: {
            4: '4px'
        },
        shadows: {
            elevation1: '0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%)',
            elevation2: '0 3.2px 7.2px 0 rgb(0 0 0 / 13%), 0 0.6px 1.8px 0 rgb(0 0 0 / 11%)',
            elevation3: '0 6.4px 14.4px 0 rgb(0 0 0 / 13%), 0 1.2px 3.6px 0 rgb(0 0 0 / 11%)',
            elevation4: '0 25.6px 57.6px 0 rgb(0 0 0 / 22%), 0 4.8px 14.4px 0 rgb(0 0 0 / 18%)'
        },
        zIndices: {},
        transitions: {}
    },
    media: {
        bp1: '(min-width: 768px)'
    },
    utils: {
        px: value => ({
            paddingLeft: value,
            paddingRight: value
        }),
        py: value => ({
            paddingTop: value,
            paddingBottom: value
        }),
        mx: value => ({
            marginLeft: value,
            marginRight: value
        }),
        my: value => ({
            marginTop: value,
            marginBottom: value
        }),
        linearGradient: value => ({
            backgroundImage: `linear-gradient(${value})`
        }),
        radialGradient: value => ({
            backgroundImage: `radial-gradient(${value})`
        })
    }
})

export { styled, keyframes, getCssText, globalStyles }

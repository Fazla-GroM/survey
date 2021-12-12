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
            elevation1:
                '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            elevation2:
                '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
            elevation3:
                '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
            elevation4:
                '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
            elevation5:
                '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)'
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
        })
    }
})

export { styled, keyframes, getCssText, globalStyles }

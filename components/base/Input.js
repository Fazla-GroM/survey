import { styled } from 'stitches'

const InputTick = styled('div', {
    width: '$24',
    height: '$24',
    position: 'relative',
    cursor: 'pointer',

    variants: {
        variant: {
            radio: {
                borderRadius: '100px',
                backgroundColor: '$greyDark',

                '&:hover': {
                    backgroundColor: '$greyLight',
                    border: '1px solid $pink'
                },

                '&::before': {
                    position: 'absolute',
                    content: "''",
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    backgroundColor: '$white',
                    width: '$8',
                    height: '$8',
                    borderRadius: '100px',
                    boxShadow: '$elevation3',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out'
                }
            }
        }
    }
})

const InputLabel = styled('label', {
    display: 'block',
    cursor: 'pointer',

    variants: {
        variant: {
            field: {
                position: 'absolute',
                top: '$4',
                left: '$8',
                fontSize: '$verySmall'
            },
            tick: {
                display: 'flex',
                alignItems: 'center',
                gap: '$8'
            }
        }
    }
})

const Input = styled('input', {
    all: 'unset',
    fontFamily: 'inherit',
    fontSize: '$default',
    display: 'block',

    variants: {
        variant: {
            field: {
                width: '100%',
                borderTopLeftRadius: '$4',
                borderTopRightRadius: '$4',
                padding: '$24 $8 $4 $8',
                backgroundColor: '$greyDark',

                '&:focus': {
                    backgroundColor: '$greyLight'
                }
            },
            tick: {
                clip: 'rect(1px, 1px, 1px, 1px)',
                clipPath: 'inset(50%)',
                height: '1px',
                width: '1px',
                margin: '-1px',
                overflow: 'hidden',
                padding: 0,
                position: 'absolute',

                '&:focus + label': {
                    [`& ${InputTick}`]: {
                        backgroundColor: '$greyLight',
                        border: '1px solid $pink'
                    }
                },

                '&:checked + label': {
                    [`& ${InputTick}`]: {
                        '&::before': {
                            opacity: 1
                        }
                    }
                }
            }
        }
    }
})

const InputRoot = styled('div', {
    position: 'relative',
    display: 'flex',

    variants: {
        variant: {
            field: {
                minWidth: '25.6rem',
                '&::after': {
                    content: "''",
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    backgroundColor: '$pink'
                },

                '&::before': {
                    content: "''",
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '0',
                    height: '2px',
                    backgroundColor: '$pink',
                    transition: 'width 0.2s ease-in-out'
                },

                '&:focus-within::before': {
                    width: '100%'
                }
            },
            tick: {
                alignItems: 'center',
                gap: '$16'
            }
        }
    }
})

const InputFieldset = styled('fieldset', {
    all: 'unset',
    display: 'flex',
    flexDirection: 'row',
    gap: '$16',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
})

const InputLegend = styled('legend', {
    all: 'unset',
    display: 'block',
    marginBottom: '$24'
})

const InputError = styled('span', {
    display: 'block',
    color: '$red',
    fontSize: '$small',
    position: 'absolute',
    left: '$8',
    bottom: '-$24',
    variants: {
        variant: {
            fieldset: {
                left: '50%',
                transform: 'translateX(-50%)'
            }
        }
    }
})

export { Input, InputRoot, InputLabel, InputFieldset, InputLegend, InputTick, InputError }

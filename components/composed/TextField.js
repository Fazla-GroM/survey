/* eslint-disable react/display-name */
import { Input, InputLabel, InputRoot, InputError } from 'components/base'
import { forwardRef } from 'react'

const TextField = forwardRef(({ id, name, value, label, onChange, onBlur, error }, ref) => {
    return (
        <>
            <InputRoot variant="field">
                <InputLabel htmlFor={id} variant="field">
                    {label}
                </InputLabel>
                <Input
                    type="text"
                    variant="field"
                    ref={ref}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {error?.message && <InputError>{error.message}</InputError>}
            </InputRoot>
        </>
    )
})

export { TextField }

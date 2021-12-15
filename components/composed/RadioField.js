/* eslint-disable react/display-name */
import { Input, InputLabel, InputRoot, InputTick } from 'components/base'
import { forwardRef } from 'react'

const RadioField = forwardRef(({ id, name, value, label, checked, defaultChecked, onChange, onBlur }, ref) => {
    return (
        <InputRoot variant="tick">
            <Input
                variant="tick"
                type="radio"
                ref={ref}
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                defaultChecked={defaultChecked}
                onBlur={onBlur}
            />

            <InputLabel variant="tick" htmlFor={id}>
                <InputTick variant="radio" />
                {label}
            </InputLabel>
        </InputRoot>
    )
})

export { RadioField }

import { Input, InputLabel, InputRoot, InputTick } from 'components/base'

const RadioField = ({ id, name, value, label, checked, onChange }) => {
    return (
        <InputRoot variant="tick">
            <Input
                variant="tick"
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />

            <InputLabel variant="tick" htmlFor={id}>
                <InputTick variant="radio" />
                {label}
            </InputLabel>
        </InputRoot>
    )
}

export { RadioField }

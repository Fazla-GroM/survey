import { Input, InputLabel, InputRoot } from 'components/base'

const TextField = ({ id, name, value, label, onChange }) => {
    return (
        <InputRoot variant="field">
            <InputLabel htmlFor={id} variant="field">
                {label}
            </InputLabel>
            <Input type="text" variant="field" id={id} name={name} value={value} onChange={onChange} />
        </InputRoot>
    )
}

export { TextField }

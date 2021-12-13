import { InputFieldset, InputLegend } from 'components/base'

const Fieldset = ({ legend, children }) => {
    return (
        <InputFieldset>
            <InputLegend>{legend}</InputLegend>
            {children}
        </InputFieldset>
    )
}

export { Fieldset }

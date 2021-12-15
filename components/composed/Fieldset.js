import { InputFieldset, InputLegend, InputError } from 'components/base'

const Fieldset = ({ legend, children, error }) => {
    return (
        <InputFieldset>
            <InputLegend>{legend}</InputLegend>
            {children}
            {error?.message && <InputError variant="fieldset">{error.message}</InputError>}
        </InputFieldset>
    )
}

export { Fieldset }

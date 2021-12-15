import { TextField } from 'components/composed/TextField'
import { Fieldset } from 'components/composed/Fieldset'
import { RadioField } from 'components/composed/RadioField'
import { generateRange } from 'helpers'

//@NOTE: this could be memoized if needed for performance but on app of this scale it realy doesnt matter :D

const FormInputResolver = ({ options, register, errors }) => {
    const { questionId, questionType, label, required, attributes } = options

    switch (questionType) {
        case 'text':
            return (
                <TextField
                    id={questionId}
                    label={label}
                    error={errors[questionId]}
                    {...register(questionId, {
                        value: '',
                        required: {
                            value: required,
                            message: 'This field is required'
                        }
                    })}
                />
            )

        case 'rating': {
            const { min, max } = attributes
            const rangeArray = generateRange(min, max)

            return (
                <Fieldset legend={label} error={errors[questionId]}>
                    {rangeArray?.map(range => (
                        <RadioField
                            key={`${questionId}-${range}`}
                            id={`${questionId}-${range}`}
                            label={range}
                            value={range}
                            {...register(questionId, {
                                required: {
                                    value: required,
                                    message: 'This field is required'
                                }
                            })}
                        />
                    ))}
                </Fieldset>
            )
        }

        default:
            console.warn(`Input element of type ${questionId} is not supported`)
            return null
    }
}

export { FormInputResolver }

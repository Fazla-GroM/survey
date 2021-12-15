import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Flex, FilledButton } from 'components/base'
import { TextField } from 'components/composed/TextField'
import { RadioField } from 'components/composed/RadioField'
import { Fieldset } from 'components/composed/Fieldset'
import { generateRange } from 'helpers'

const resolveInputComponent = (options, register, errors) => {
    const { questionId, questionType, label, required, attributes } = options

    switch (questionType) {
        case 'text':
            return (
                <TextField
                    key={questionId}
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
                <Fieldset key={questionId} legend={label} error={errors[questionId]}>
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

const Form = ({ formSchema = [], defaultValues, onSubmit }) => {
    const { register, handleSubmit, formState } = useForm({ defaultValues })

    const { errors } = formState

    const FormFields = useCallback(() => {
        return formSchema?.map(schemaItem => resolveInputComponent(schemaItem, register, errors))
    }, [register, formSchema, errors])

    return (
        <Flex as="form" direction="column" gap="9" onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" gap="7">
                <FormFields />
            </Flex>
            <FilledButton type="submit">Submit</FilledButton>
        </Flex>
    )
}

export { Form }

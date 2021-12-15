import { createServer, Model, JSONAPISerializer, belongsTo, hasMany, Response } from 'miragejs'
import IdentityManager from './IdentityManager'
import getConfig from 'next/config'
import { randomizeTruth } from 'helpers'

const { publicRuntimeConfig } = getConfig()

const validatePostAnswers = answersArr => {
    const errors = answersArr?.reduce((acc, item, index) => {
        const { answer } = item

        if (!answer) {
            acc.push({
                source: `data/attributes/answers/${index}/questionId`,
                detail: 'The value is required'
            })
        }

        return acc
    }, [])

    return { isValid: !errors?.length, errors }
}

const initialSurvey = {
    title: 'Film feedback form',
    description:
        '<p>Thank you for participating in the film festival!</p><p>Please fill out this short survey so we can record your feedback.</p>',
    questions: [
        {
            questionId: 'film',
            questionType: 'text',
            label: 'What film did you watch?',
            required: true,
            attributes: null
        },
        {
            questionId: 'review',
            questionType: 'rating',
            label: 'How would you rate the film? (1 - Very bad, 5 - Very good)',
            required: true,
            attributes: {
                min: 1,
                max: 5
            }
        }
    ]
}

const createMirageService = ({ environment = 'test' } = {}) => {
    const server = createServer({
        environment,
        identityManagers: {
            application: IdentityManager
        },
        serializers: {
            application: JSONAPISerializer
        },
        models: {
            survey: Model.extend({
                answer: hasMany()
            }),
            answer: Model.extend({
                survey: belongsTo()
            })
        },

        seeds(server) {
            server.create('survey', initialSurvey)
        },

        routes() {
            this.urlPrefix = publicRuntimeConfig.apiBaseUrl
            this.namespace = publicRuntimeConfig.apiPrefix

            this.get('/survey', schema => {
                const randomTruth = randomizeTruth(0.3)

                if (randomTruth) {
                    return new Response(
                        500,
                        {
                            'Content-Type': 'application/vnd.api+json'
                        },
                        {
                            errors: [
                                {
                                    title: 'Internal Server Error',
                                    detail: "Something went wrong. We're working on it!"
                                }
                            ]
                        }
                    )
                }

                return schema.surveys.first()
            })

            this.post('/survey', (schema, request) => {
                const data = JSON.parse(request.requestBody)

                return schema.surveys.create(data)
            })

            this.get('/survey/:id/answers', (schema, request) => {
                const surveyId = request.params.id
                const survey = schema.answers.where({ surveyId })

                return survey
            })

            this.post('/survey/:id/answers', (schema, request) => {
                const surveyId = request.params.id
                const { data } = JSON.parse(request.requestBody)

                const { isValid, errors } = validatePostAnswers(data?.attributes?.answers)

                const randomTruth = randomizeTruth(0.3)

                if (randomTruth) {
                    return new Response(
                        500,
                        {
                            'Content-Type': 'application/vnd.api+json'
                        },
                        {
                            errors: [
                                {
                                    title: 'Internal Server Error',
                                    detail: "Something went wrong. We're working on it!"
                                }
                            ]
                        }
                    )
                }

                if (!isValid) {
                    return new Response(
                        422,
                        {
                            'Content-Type': 'application/vnd.api+json'
                        },
                        { errors }
                    )
                }

                return schema.answers.create({
                    ...data?.attributes,
                    surveyId
                })
            })

            this.passthrough(request => {
                const nextWhitlist = [
                    '/_next/static/development/_devMiddlewareManifest.json',
                    '/_next/static/development/_devPagesManifest.json'
                ]

                return nextWhitlist.some(whitelistedPath => whitelistedPath === request.url)
            })
        }
    })

    return server
}

export { createMirageService }

# MovieFest

## Required tech

-   [nvm](https://github.com/nvm-sh/nvm)
    -   Because industry standard :)

## How to start project

-   For starters run:
    -   `nvm install` to install working node version
-   Install dependencies:
    -   `npm install`
-   Start project:
    -   `npm run dev`

## Technologies used

-   [Next](https://nextjs.org/)
    -   react frontend framework
-   [Stitches](https://stitches.dev/)
    -   css-in-js lib for styling
-   [React-Query](https://react-query.tanstack.com/)
    -   react lib for fetching and caching data
-   [Husky](https://opencollective.com/husky)
    -   git hooks (currently only for commintlint)
-   [MirageJs](https://miragejs.com/)
    -   API mocking library

## Important notes

-   Currently mock api randomizes responses for both `GET` and `POST` request with `30%` chance to get error response. You can turn it of or modify it in `createMirageService.js` on folowing lines:
    -   [GET](https://github.com/Fazla-GroM/survey/blob/3dff1bb666398741d1c898753eb147c2c6a8c523/services/mirageService/createMirageService.js#L77)
    -   [POST](https://github.com/Fazla-GroM/survey/blob/3dff1bb666398741d1c898753eb147c2c6a8c523/services/mirageService/createMirageService.js#L118)

## What is missing in project

-   No seo on frontend but that is easy to integrate with [NextSeo](https://github.com/garmeeh/next-seo)
-   No CI/CD
-   No SSR. App currently doesnt use SSR because mock api library doesn support it :(

## TLDR

-   I have lost most of time trying to find a nice mocking lib which has `JSONAPI` support out of the box, and when i did, i had to learn how to use it and how to consume json api. :D
-   I deliberately pushed `.env` file upstream

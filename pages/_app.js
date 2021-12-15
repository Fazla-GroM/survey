import { globalStyles } from 'stitches'
import { BaseLayout } from 'layouts'
import { createMirageService } from 'services'
import { QueryClient, Hydrate, QueryClientProvider } from 'react-query'
import { useRef } from 'react'

//start fake server
if (process.env.NODE_ENV === 'development') {
    createMirageService({ environment: 'development' })
}

const App = ({ Component, pageProps }) => {
    //inject global css
    globalStyles()

    const queryClientRef = useRef()

    if (!queryClientRef.current) {
        queryClientRef.current = new QueryClient()
    }

    return (
        <QueryClientProvider client={queryClientRef.current}>
            <Hydrate state={pageProps?.dehydratedState}>
                <BaseLayout>
                    <Component {...pageProps} />
                </BaseLayout>
            </Hydrate>
        </QueryClientProvider>
    )
}

export default App

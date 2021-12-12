import { globalStyles } from 'stitches'
import { BaseLayout } from 'layouts'

const App = ({ Component, pageProps }) => {
    //inject global css
    globalStyles()

    return (
        <BaseLayout>
            <Component {...pageProps} />
        </BaseLayout>
    )
}

export default App

import { globalStyles } from 'stitches'

const App = ({ Component, pageProps }) => {
    //inject global css
    globalStyles()

    return <Component {...pageProps} />
}

export default App

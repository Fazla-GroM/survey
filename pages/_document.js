import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from 'stitches'

class Document extends NextDocument {
    static async getInitialProps(ctx) {
        const initialProps = await NextDocument.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document

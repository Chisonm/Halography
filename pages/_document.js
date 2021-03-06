import Document, {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
            const initialProps = await Document.getInitialProps(ctx)
            return {...initialProps}
    }
    render() {
        return (
            <Html lang="en">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;500;600&family=Fraunces:wght@700;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Red+Hat+Display:wght@500;700;900&display=swap" rel="stylesheet" />
                <Head>
                    <noscript>
                        <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                        />
                    </noscript>
                </Head>
                <body className="body">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
import '../styles/globals.scss'
import Layout from '../components/Layout/Layout'
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router  }) {
  return (
    <AnimatePresence exitBeforeEnter>
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
    </AnimatePresence>
  )
}

export default MyApp

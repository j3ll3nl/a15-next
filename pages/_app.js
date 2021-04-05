// import App from 'next/app'

// Importing Sass with Bootstrap CSS
import '../styles/app.scss';
import { withTina } from 'tinacms'
import { GitClient, GitMediaStore } from '@tinacms/git-client'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'

const client = new GitClient('/___tina')

function A15App({ Component, pageProps }) {
    return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default withTina(A15App, {
    enabled: true,
    apis: {
        git: client,
    },
    media: new GitMediaStore(client),
    sidebar: true,
    plugins: [MarkdownFieldPlugin],
})

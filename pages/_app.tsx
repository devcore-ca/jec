import { AppProvider } from "contexts/app/AppContext";
// import createCache from "@emotion/cache";
import { AppProps } from "next/app";

import MuiTheme from "theme/MuiTheme";
import GoogleAnalytics from "utils/GoogleAnalytics";
import OpenGraphTags from "utils/OpenGraphTags";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import React, { FC, Fragment, useEffect } from "react";
import "../src/fake-db";
import createEmotionCache from "../src/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  Component: any;
  emotionCache?: EmotionCache;
  pageProps: any;
}
// export const cache = createCache({ key: 'css', prepend: true })

//Binding events.
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());
// small change
nProgress.configure({ showSpinner: false });

// interface Props {
//   Component: any;
//   emotionCache: any;
//   pageProps: any;
// }

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) => {
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const Layout = Component.layout || Fragment;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <GoogleAnalytics />
        <OpenGraphTags />
      </Head>
      <AppProvider>
        <MuiTheme>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MuiTheme>
      </AppProvider>
    </CacheProvider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default App;

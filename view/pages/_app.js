import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { googleId } from '../config/googleAnalytics';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Salesforce Noob</title>
        <meta name="description" content="Free Salesforce Youtube tutorials" />
      <meta name="keywords" content="HTML, CSS, JavaScript, Salesforce,Apex,LWC , Salesforce Blogs,Salesforce Tutorials" />
      <meta name="author" content="Salesforce Noob" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Script 
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=G-ERV1B21EPD`}/>
          
        <Script>
          strategy='lazyOnload'
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-ERV1B21EPD');
          `}
        </Script>

        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
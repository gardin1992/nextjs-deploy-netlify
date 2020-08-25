// pages/_app.js
import React from 'react'
import MainLayout from '../components/layouts/main';

function MyApp({ Component, pageProps }) {
  return <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
}

export default MyApp
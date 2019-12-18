import React from 'react'
import Head from 'next/head'
import { Carrousel, HomeBoxes, ForCompany, ForStore, ForUser, Footer } from '../components'
import Page from '../layouts/Page'

const Home = () => (
  <Page>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WG2HDM');`,
      }}>
      </script>
    </Head>

    <Carrousel />
    <HomeBoxes />
    <ForCompany />
    <ForStore />
    <ForUser />
    <Footer />
  </Page>
)

export default Home

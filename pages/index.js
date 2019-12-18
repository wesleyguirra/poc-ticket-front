import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { Carrousel, HomeBoxes, ForCompany, ForStore, ForUser, Footer } from '../components'
import Page from '../layouts/Page'

const Home = ({ sliders, menus }) => (
  <div>
    <Page menus={menus}>
      <Head>
        <title>Ticket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carrousel sliders={sliders} />
      <HomeBoxes />
      <ForCompany />
      <ForStore />
      <ForUser />
      <Footer />
    </Page>
  </div>
)

Home.defaultProps = {
  sliders: []
}

Home.getInitialProps = async function() {
  const slidersResponse = await fetch('http://localhost:1337/sliders')
  const sliders = await slidersResponse.json()

  const menusResponse = await fetch('http://localhost:1337/menus')
  const menus = await menusResponse.json()

  return {
    sliders,
    menus
  }
}

export default Home

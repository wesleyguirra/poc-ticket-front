import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { Carrousel, HomeBoxes, ForCompany, ForStore, ForUser, Footer } from '../components'
import Page from '../layouts/Page'

const Home = ({ sliders, menus, homeBoxes }) => (
  <div>
    <Page menus={menus}>
      <Head>
        <title>Ticket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carrousel sliders={sliders} />
      <HomeBoxes homeBoxes={homeBoxes} />
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
  const slidersResponse = await fetch('https://ticket-cms.herokuapp.com/sliders')
  const sliders = await slidersResponse.json()

  const menusResponse = await fetch('https://ticket-cms.herokuapp.com/menus')
  const menus = await menusResponse.json()

  const homeBoxesResponse = await fetch(`https://ticket-cms.herokuapp.com/homeboxes`);
  const homeBoxes = await homeBoxesResponse.json();

  return {
    sliders,
    menus,
    homeBoxes
  }
}

export default Home

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
        <link rel="icon" href="/assets/favicon.png" />
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
  const slidersResponse = await fetch(`http://192.168.1.191:1337/sliders`);
  const sliders = await slidersResponse.json();

  const menusResponse = await fetch(`http://192.168.1.191:1337/menus`);
  const menus = await menusResponse.json();

  const homeBoxesResponse = await fetch(`http://192.168.1.191:1337/homeboxes`);
  const homeBoxes = await homeBoxesResponse.json();

  return {
    sliders,
    menus,
    homeBoxes
  }
}

export default Home

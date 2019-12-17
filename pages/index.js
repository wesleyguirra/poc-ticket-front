import React from 'react'
import Head from 'next/head'
import { SearchBar, Nav, Carrousel, HomeBoxes, ForCompany, ForStore, ForUser, Footer } from '../components'

const Home = () => (
  <div>
    {/* <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head> */}

    <SearchBar />
    <Nav />
    <Carrousel />
    <HomeBoxes />
    <ForCompany />
    <ForStore />
    <ForUser />
    <Footer />
  </div>
)

export default Home

import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { Carrousel, HomeBoxes, ForCompany, ForStore, ForUser, Footer } from '../components'
import Page from '../layouts/Page'

const Home = ({ sliders, menus }) => <div>
  <Page menus={menus}>
    <Head>
      <title>Ticket</title>
      <link rel="icon" href="/favicon.ico"/>
      <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WG2HDM');`,
      }}>
      </script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
      <script dangerouslySetInnerHTML={{
        __html: `function openEvaOnReady() {
            if ( ! evaIsActive ) return;
            clearInterval( evaOnReadyInterval );
            tries--;
            if ( tries <= 0 ) { tries = 10; return; }
            if ( typeof NIT === 'undefined' || typeof NIT.UI === 'undefined' || ! $('#alme-wrap').length ) {
                evaOnReadyInterval = setInterval( function() {
                    openEvaOnReady();
                }, 500 );
                return;
            }
            NIT.UI.open();
            $('#alme-input-field').focus();
        }
        $(document).ready(function(){
            $('<script/>',{type:'text/javascript', src:'<?php echo tkt_get_theme_asset( 'js/eva/jquery-ui.min.js' ); ?>?ver=<?php echo tkt_script_version(); ?>'}).appendTo('head');
            $('<script/>',{type:'text/javascript', src:'https://agentevirtual.ticket.com.br/alme/js/NITScriptManager.js', id:'nit-scriptmanager'}).appendTo('head');
            var evaOnReadyInterval = 0,
            evaIsActive = $('#nit-scriptmanager').length,
            tries = 10;
            // Open EVA on Click
            $('.open-eva').on('click', function(event) {
                event.preventDefault();
                openEvaOnReady();
            });
        });`,
      }}>
      </script>
      <script src="https://agentevirtual.ticket.com.br/alme/js/NITScriptManager.js" type="text/javascript" async=""
              charSet="utf-8" id="nit-scriptmanager"></script>
    </Head>
    <Carrousel sliders={sliders}/>
    <HomeBoxes/>
    <ForCompany/>
    <ForStore/>
    <ForUser/>
    <Footer/>
  </Page>
</div>

Home.defaultProps = {
  sliders: []
}

Home.getInitialProps = async function() {
  const slidersResponse = await fetch('https://ticket-cms.herokuapp.com/sliders')
  const sliders = await slidersResponse.json()

  const menusResponse = await fetch('https://ticket-cms.herokuapp.com/menus')
  const menus = await menusResponse.json()

  return {
    sliders,
    menus
  }
}

export default Home


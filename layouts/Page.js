import React, { Fragment } from 'react';
import Header from '../components/Header';
import fetch from '../pages'

const Page = ({ children, menus }) => {
  return (
    <Fragment>
      <Header menus={menus} />
      <div className="container page pt-4 ">
        {children}
        <div className="push" />
      </div>
    </Fragment>
  );
}

export default Page;

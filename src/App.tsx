import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import Header from './components/common/header/Header';
import { Routes } from './routes';
import { fetchDataRequest } from './actions/user';
import { useDispatch, useSelector } from 'react-redux';

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;

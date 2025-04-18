import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Basket from '../pages/Basket'
import Wish from '../pages/Wish'
import NotFound from '../components/NotFound'

const Router = () => {
  return (
  <BrowserRouter >
  <Routes>
    <Route element={<Layout/>}>
    <Route path="/" element={<Home />} />
    <Route path="/basket" element={<Basket />} />
    <Route path="/wish" element={<Wish />} />

    </Route>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>
)
}

export default Router
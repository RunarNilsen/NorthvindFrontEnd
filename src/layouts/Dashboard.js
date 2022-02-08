import React from 'react';
import ProductList from '../pages/ProductList';
import Categories from './Categories';
import { Grid } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';
import { ToastContainer } from 'react-toastify';
import ProductAdd from '../pages/ProductAdd';


export default function () {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid columns={2} divided>
        <Grid.Row>
            <Grid.Column width= "4">
            <Categories></Categories>
            </Grid.Column>
            <Grid.Column width= "12">
              <Routes>
              <Route exact path="/" element={<ProductList/>} />
              <Route path="/products" element={<ProductList/>} />
              <Route path="/products/:name" element={<ProductDetail/>} />
              <Route path="/cart" element={<CartDetail/>} />
              <Route path="/product/add" element={<ProductAdd/>} />
              </Routes>
            </Grid.Column>
           
        </Grid.Row>
    </Grid>
      
      
  </div>
        );
}

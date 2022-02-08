import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {Dropdown, Label} from 'semantic-ui-react'
export default function CartSummary() {

  const {cartItems} = useSelector(state => state.cart) // state deki cart i degiskene atadik. state rootReducer.js ten aliyor
  return (
    <div>
      <Dropdown item text='Sepetim'>
            <Dropdown.Menu>
              {
              cartItems.map((cartItem)=>(
                  <Dropdown.Item key={cartItem.product.id}>
                    {cartItem.product.productName}
                    <Label>
                      {cartItem.quantity}
                    </Label>
                  </Dropdown.Item>
                 ))
              } 
              <Dropdown.Divider/>
              <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>i
    </div>
  )
}

import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { useSelector } from 'react-redux';

export default function Navi() {
 
const {cartItems} = useSelector(state => state.cart)
const [IsAuthenticated, setIsAuthenticated] = useState(true); // false yani authenticated degil
const history = useNavigate()

function handleSingOut(params) {
  setIsAuthenticated(false)
  history("/")

}
function handleSingIn(params) {
  setIsAuthenticated(true)
}

  return (
    <div>
        <Menu inverted fixed="top" size='tiny'>
          <Container>
          <Menu.Item name='home'/>
          <Menu.Item name='messages'/>
          <Menu.Menu position='right'>
          {cartItems.length>0&&<CartSummary/>}
          {IsAuthenticated ? <SignedIn signOut={handleSingOut} bisey="1"/> : <SignedOut signIn={handleSingIn}/>}
          </Menu.Menu>
          </Container>
        
        </Menu>
    </div>
        )
    
}

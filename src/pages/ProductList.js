import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Icon, Menu, Table, TableCell } from 'semantic-ui-react'
import ProductService from '../services/productServices';
import { addToCart } from '../store/actions/cartActions';


export default function ProductList() {

const dispatch = useDispatch() // dispatch actions lari cagirmak icin kullanilan fonksiyondur

  // HOOK TEKNIGINI KULLANACAGIZ
const [products, setProducts] = useState([]);

  useEffect(()=>{
    // sayfa yuklendiginde yapilmasini istedigin kodu buraya yazarsin
    let productService = new ProductService()
    productService.getProducts().then(result=>setProducts(result.data.data)).catch() // datalari API den alip products a atariz

  }, []) // Bu array olmazsa surekli request gonderir.


  const HandleAddToCart = (product)=>{
    dispatch(addToCart(product)) // burada payload product tir
    toast.success(`${product.productName} sepete eklendi`)
  }


  return (
        <div >
            <Table celled >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Urun Adi</Table.HeaderCell>
        <Table.HeaderCell>Birim Fiyati</Table.HeaderCell>
        <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
        <Table.HeaderCell>Aciklama</Table.HeaderCell>
        <Table.HeaderCell>Kategori</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        products.map(product=>(
          <Table.Row key={product.id}>
          <Table.Cell><Link to={"/products/"+product.productName}>{product.productName}</Link></Table.Cell>
          <Table.Cell>{product.unirPrice}</Table.Cell>
          <Table.Cell>{product.unitsInStock}</Table.Cell>
          <Table.Cell>{product.quantityPerUnit}</Table.Cell>
          <Table.Cell>{product.category.categoryName}</Table.Cell>
          <TableCell><Button onClick={()=>HandleAddToCart(product)}>Sepete ekle</Button></TableCell>
        </Table.Row>
        ))}
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
        </div>
        );
}
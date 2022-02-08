import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productServices';

export default function ProductDetail() {
    let {name} = useParams() // Route icindeki id gibi parametreleri tutar ve object dondurur
  
    const [product, setProduct] = useState([]);

    useEffect(()=>{
      // sayfa yuklendiginde yapilmasini istedigin kodu buraya yazarsin
      let productService = new ProductService()
      productService.getByProductName(name).then(result=>setProduct(result.data.data)).catch() // datalari API den alip products a atariz
    }, [])
  
    return (
    <div>
        
        <Card.Group>
            <Card fluid>
            <Card.Content>
                <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
                />
                <Card.Header>{product.productName}</Card.Header>
                <Card.Meta>New user</Card.Meta>
                <Card.Description>
                Jenny requested permission to view your contact details
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button basic color='green'>
                    Approve
                </Button>
                <Button basic color='red'>
                    Decline
                </Button>
                </div>
            </Card.Content>
            </Card>
        </Card.Group>
    </div>
  )
}


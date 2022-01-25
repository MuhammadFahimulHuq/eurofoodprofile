import React from 'react';
import { Button } from 'react-bootstrap';
import { ProductCard } from '../Components/ProductCard';

const Product = () => {
  return <div>
      <ProductCard />
      <Button href='https://indd.adobe.com/view/d41ec24d-10b6-4c44-aab1-ef604393f96d' variant="success" style={{marginLeft:'45%',marginTop:'2%'}}>View Our Product</Button>
  </div>;
};

export default Product;

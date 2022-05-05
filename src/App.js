import React, { useState, useEffect } from 'react';
import Commerce from "@chec/commerce.js";
import Item from './components/Item'
import './App.css'

const commerce = new Commerce(
  "pk_test_41976d36632e5b8d334f5c36edc78bfe60e30b428ed61"
);



export default function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    commerce.products.list().then((res) => {
      setProducts(res.data);
    });

  }, []);

  return (
    
    <div>
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
    

  );
}



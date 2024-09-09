import React from 'react'
import Product from './Product'             

export default function ProductList({props}) {   //{product}      console.log(product);     console.log(props);
  return (                                   //*** We can't change props ***    ( Humare jitne bi components hota ha React me, vo ek pure function hote ha... )
    props.products.map((product)=>{
        return <Product product = {product}/>
    })
  )
}


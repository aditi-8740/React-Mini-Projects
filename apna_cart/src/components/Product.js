import React from 'react'

export default function Product(props) {
  return (
    <div className='row'>
        <div className='col-6'>
            <h2>{props.name}</h2>
            <h2>{props.price}</h2>
            <h2>{props.quantity}</h2>
        </div>
    </div>
  )
}

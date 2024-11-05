import React, { useEffect, useState } from 'react'
import Title from './title';
import { products } from '../assets/frontend_assets/assets';
import Card from './card';

const BestSeller = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
    setData(products.slice(1, 6));

  },[])


  return (
    <>
    <div>
      <Title text1 = "BEST" text2 = "SELLER"/>
    </div>

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 m-1'>
      {data.map(( el)=>{
        return <Card el = {el}/>

      })}
    </div>
    </>

  )
}

export default BestSeller;

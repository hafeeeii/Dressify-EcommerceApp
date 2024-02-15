import { Product } from '@/lib/utils/types'
import Image from 'next/image';
import React from 'react'

const MainImage = ({productData}:{productData:Product}) => {
    const productImages = productData?.attributes?.img?.data?.attributes?.url;
    console.log(productData,'this is product data form imaage')
  return (

    <div className='w-[40vw] h-[30vh] bg-red-200'>
{productData?.attributes?.images?.data?.map((image)=>(
    <div>
        <Image src={image?.data?.attributes?.url} alt='product image' width={333} height={333} />
    </div>
))}


    </div>
  )
}

export default MainImage
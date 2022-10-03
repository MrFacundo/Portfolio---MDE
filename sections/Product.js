import React from 'react'
import tw from "tailwind-styled-components"

const ProductContainer = tw.div`
    relative
    flex
    items-center
    justify-center
    h-screen
    mb-12
    bg-fixed
    bg-center
    bg-cover
    custom-img
`
const Overlay = tw.div`
    absolute
    top-0
    left-0
    right-0
    bottom-0
    bg-black/60
    z-[2]
`

const Product = ({heading, message}) => {
    return (
        <ProductContainer>
            <Overlay>
            </Overlay>
            <div data-scroll data-scroll-speed="4"   className='p-5 text-white z-[2] ml-5 mt-5'>
                <h2 className='text-5xl font-bold'>{heading}</h2>
                <p className='py-5 text-xl'>{message}</p>
                <button className='px-8 py-2 border'>Button</button>
            </div>
        </ProductContainer>

    )
}

export default Product
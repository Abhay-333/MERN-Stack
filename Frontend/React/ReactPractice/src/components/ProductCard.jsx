import React from 'react'

const ProductCard = () => {
  return (
    <div className='bg-zinc-800 w-[20rem] rounded-xl p-3 flex flex-col gap-3'>
        <img className='w-full object-cover object-center' src="https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <h3 className='font-bold text-3xl'>Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores</p>
    </div>
  )
}

export default ProductCard
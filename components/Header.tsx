'use client';
import { useState } from 'react';

import Navbar from '@/components/Navbar';

const Header = () => {
    const [openAside, setOpenAside] = useState(false);

  return (
    <header className='bg-gray-900 p-2 rounded-sm sticky top-0.5'>
        <Navbar setOpenAside={setOpenAside}/>
        <div className='mt-4 h-9 p-2 text-gray-200 font-semibold'>{Date().slice(0, 10)}</div>

        <aside className={`w-1/2 min-w-[300px] fixed left-0 top-0 bottom-0 z-20 bg-gray-800 rounded-sm 
                            ${openAside? 'translate-x-0' : '-translate-x-full'} duration-300 ease-out`}
        >
            <div className='text-right text-5xl text-gray-300 p-2
                            hover:cursor-pointer hover:text-gray-50 active:text-white'
                onClick={()=> setOpenAside(false)}
            >
                X
            </div>
        </aside>

        <div id='overlay'
            className={`fixed inset-0 bg-gray-600 opacity-70 z-10 ${openAside? '' : 'hidden'}`}
            onClick={()=> setOpenAside(false)}
        >
        </div>
    </header>
  )
}

export default Header
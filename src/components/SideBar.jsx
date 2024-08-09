import React from 'react'
import { navLinks } from '../constants'
import { headerLogo } from '../assets/images';

const SideBar = () => {
    return (
        <>
            <a href="/" className='pt-20 pl-5 pb-14'>
                <img 
                src={headerLogo} 
                    alt="Logo" 
                    width={130} 
                    height={29}
                    className='m-0 w-[129px] h-[29px]'
                />
            </a>

            <ul className='p-10'>
                {navLinks.map((item) => (
                    <li className='pb-[10vmin]'>
                        <a 
                            href={item.href}
                            className='font-monts errat leading-normal text-lg text-black font-medium hover:text-red-700'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </>

    )
}

export default SideBar
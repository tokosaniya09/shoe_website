import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants/index';
import Button from './Button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import SideBar from './SideBar';
import * as React from 'react';
import Drawer from '@mui/material/Drawer';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img 
                src={headerLogo} 
                    alt="Logo" 
                    width={130} 
                    height={29}
                    className='m-0 w-[129px] h-[29px]'
                />
            </a>

            <ul  className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                            href="item.href" 
                            className='font-monts errat leading-normal text-lg text-slate-gray font-medium hover:text-red-700'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='absolute right-15p'>
                <SignedOut>
                    <SignInButton>
                    <button className="px-3 py-3 border font-montserrat text-md leading-none bg-coral-red text-white border-coral-red hover:bg-red-500 hover:border-red-500 rounded-full active:animate-pingReverse">
                        SignUp
                    </button>
                    </SignInButton>
                </SignedOut>
            </div>

            <div className="absolute right-15p top-30p">
                <SignedIn>
                    <UserButton 
                        appearance={{
                        elements: {
                            rootBox: "w-full h-full flex justify-center items-center",
                            userButtonAvatarBox: "w-10 h-10", 
                        },
                        }} 
                    />
                </SignedIn>
            </div>

            
            <img 
                className="block lg:hidden cursor-pointer active:animate-pingReverse" 
                src={hamburger} 
                alt="hamburger icon" 
                width={25} 
                height={25}
            />
        </nav>
    </header>
  )
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    return (
        <header 
            className='padding-x py-8 absolute z-10 w-full'
            id='top'
        >
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img 
                    src={headerLogo} 
                        alt="Logo" 
                        width={130} 
                        height={29}
                        className='m-0 w-[129px] h-[29px]'
                    />
                </a>

                <ul  className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a 
                                href={item.href} 
                                className='font-monts errat leading-normal text-lg text-black hover:text-red-700'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div onClick={toggleDrawer(true)}>
                    <img 
                        className="block lg:hidden cursor-pointer active:animate-pingReverse" 
                        src={hamburger} 
                        alt="hamburger icon" 
                        width={25} 
                        height={25}
                    />
                </div>

                <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
                    <SideBar/>
                </Drawer>
            </nav>
        </header>
    )
}

export default Nav
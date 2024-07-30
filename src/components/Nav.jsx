import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants/index';
import Button from './Button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

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
                    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red hover:bg-red-500 hover:border-red-500 rounded-full active:animate-pingReverse">
                        SignUp
                    </button>
                    </SignInButton>
                </SignedOut>
            </div>


            
            {/* <SignedOut>
                <SignInButton>
                    <Button label={SignUp}/>
                </SignInButton>
            </SignedOut> */}

            <div className="absolute right-15p top-35p">
                <SignedIn>
                    <UserButton />
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
}

export default Nav
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { CustomButton } from '.';

const Navbar = () => {
  return (
    <div className='w-full absolute z-10 top-0'>
       <nav className='flex justify-between items-center px-6 sm:px-16 py-4' >
          <Link href={"/"} className='flex justify-center items-center'>
              <Image src={"/logo.svg"} alt='logo' width={118} height={18} className='object-contain'/>
          </Link>
          <CustomButton title={"Sign In"} containerStyles={"text-primary-blue rounded-full bg-white"} btnType={"button"}/>
       </nav>
    </div>
  );
}

export default Navbar;

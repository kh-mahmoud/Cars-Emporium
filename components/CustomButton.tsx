'use client'

import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const CustomButton = ({title,containerStyles,handleClick,btnType,textStyles,rightIcon}:CustomButtonProps) => {
  return (
       <button 
           type={btnType}
           className={`custom-btn ${containerStyles}`}
           onClick={handleClick}
           >
           <span className={`${textStyles}`}>
               {title}
           </span>

           {rightIcon && <div className='absolute w-6 h-6 right-6'>
               <Image
                  src={rightIcon}
                  alt='right arrow'
                  fill
                  className='object-contain'
                  />
           </div>}

       </button>
  );
}

export default CustomButton;

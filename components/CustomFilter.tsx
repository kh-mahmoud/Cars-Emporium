'use client'

import { CustomFilterProps } from '@/types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { updateSearchParams } from '@/utils';



const CustomFilter = ({title,options}:CustomFilterProps) => {
    const [selected, setSelected] = useState(options[0])
      const router = useRouter();


    const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
  
      router.push(newPathName,{scroll: false});
    };


  return (
    <div className='w-fit'>
        <Listbox value={selected} onChange={(e)=>{setSelected(e),handleUpdateParams(e)}}>

          <div className='relative z-10 w-fit'>
           <Listbox.Button className="custom-filter__btn">
              <span className="block truncate">{selected?.title}</span>
               <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Listbox.Button>

            <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 px-4 ${
                      active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected?'font-medium':"font-normal"}`}>
                        {option.title}
                      </span>
                     
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
          
          </div>

        </Listbox>

    </div>
  );
}

export default CustomFilter;

'use client'
import { useState } from "react";
import Image from "next/image";
import { CarCardProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import { CarDetails, CustomButton } from ".";



const CarCard = ({car}:{car:CarCardProps}) => {
    const {city_mpg,drive,make,model,transmission,year}=car
    const carRent=calculateCarRent(city_mpg,year)
    const [isOpen, setIsOpen] = useState(false)

    return (
    <div className="car-card group">
       <div className="car-card__content">
          <h2 className="car-card__content-title">
            {make} {model}
          </h2>
       </div>

       <p className="flex mt-6">
           <span className="self-start text-[14px] font-semibold">$</span>
                <span className="text-[32px] font-extrabold">{carRent}</span>
           <span className="self-end text-[14px] font-semibold">/day</span> 
       </p>

       <div className="relative w-full my-3 h-40 object-contain ">
           <Image src={generateCarImageUrl(car)} alt="card-model" fill className="object-contain" priority/>
       </div>

       <div className="relative flex w-full mt-2">
         <div className=" relative flex w-full group-hover:invisible text-gray justify-between">
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src={"steering-wheel.svg"} width={20} height={20} alt="steering wheel"/>
                <p className="text-[14px]">
                    {transmission==='a'?'Automatique':'Manual'}
                </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
                <Image src={"tire.svg"} width={20} height={20} alt="steering wheel"/>
                <p className="text-[14px]">
                    {drive.toUpperCase()}
                </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
                <Image src={"gas.svg"} width={20} height={20} alt="steering wheel"/>
                <p className="text-[14px]">
                    {city_mpg} MPG
                </p>
            </div>
         </div>
         <div className="car-card__btn-container">
             <CustomButton
                 title={'View More' }
                 containerStyles={"w-full py-[16px]  rounded-full bg-primary-blue"}
                 textStyles={"text-[14px] text-white font-bold"}
                 btnType={"button"}
                 rightIcon={'/right-arrow.svg'}
                 handleClick={()=>setIsOpen(true)} />
         </div>
       </div>
    <CarDetails isOpen={isOpen} car={car} closeModal={()=>setIsOpen(false)} />
    </div>
  );
}

export default CarCard;

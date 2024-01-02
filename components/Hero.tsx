'use client'

import Image from "next/image";
import { CustomButton } from ".";


const Hero = () => {
    const handlescroll=()=>
    {

    }
    
  return (
    <div className="hero">
        <div className="xl:w-[55%] max-xl:w-full pt-28 padding-x ">
            <h1 className="hero__title">
               Discover, Reserve, and Drive Effortless Car Exploration and Booking!
            </h1>
            <p className="hero__subtitle ">
                Streamline your car experience with our effortless booking process.
            </p>
            <CustomButton
                 btnType="button"
                 title={"Explore Cars"}
                 containerStyles="bg-primary-blue text-white rounded-full mt-10"
                 handleClick={handlescroll}
                />
        </div>
        
        <div className=" xl:w-[45%] hero__image-container">
           <div className="hero__image">
               <Image src={"/hero.png"} alt="hero"  fill className="object-contain"/>
           </div>
           <div className="hero__image-overlay"/>

        </div>
        
    </div>
  );
}

export default Hero;

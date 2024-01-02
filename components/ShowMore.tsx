'use client'
import { ShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';
import { CustomButton } from '.';
import { updateSearchParams } from '@/utils';




const ShowMore = ({pageNumber,isNext}:ShowMoreProps) => {
    const router=useRouter()

    const handleNavigation = () => {
        // Calculate the new limit based on the page number and navigation type
        const newLimit = (pageNumber + 1) * 10;
    
        // Update the "limit" search parameter in the URL with the new value
        const newPathname = updateSearchParams("limit", `${newLimit}`);
        
        router.push(newPathname,{scroll: false});
      };

  return (
    <div className='flex-center w-full mt-10'>
        {isNext&&
           <CustomButton
              title='ShowMore'
              btnType='button'
              containerStyles='bg-primary-blue rounded-full text-white'
              handleClick={handleNavigation}
            />
        }
    </div>
  );
}

export default ShowMore;

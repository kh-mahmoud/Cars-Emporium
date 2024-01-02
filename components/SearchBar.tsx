'use client'
import Image from "next/image";
import { SearchManufacturer } from ".";
import { FormEvent, useState  } from "react";
import { useRouter } from "next/navigation";

const SearchButton=({otherClasses}:{otherClasses:string})=>
(
  <button type="submit" className={`z-10 -ml-3 ${otherClasses}`}>
      <Image 
         src={"/magnifying-glass.svg"}
         alt={"glass"}
         width={40}
         height={40}
         className="object-contain"
      />
  </button>
)

const SearchBar = () => {
  const [manufacturer,setManufacturer]=useState<string | undefined>()
  const [model,setModel]=useState<string|undefined>()
  const router=useRouter()


  const handleSearch= (e:FormEvent<HTMLFormElement>)=>
    {
      e.preventDefault()
      if (!manufacturer?.trim() && !model?.trim()) {
          return alert("Please provide some input");
      }

      updateSearchParams(model?.toLowerCase(), manufacturer?.toLowerCase());

    }

     const updateSearchParams = (model: string | undefined, manufacturer: string | undefined) => {
        // Create a new URLSearchParams object using the current URL search parameters
        const searchParams = new URLSearchParams(window.location.search);
    
        // Update or delete the 'model' search parameter based on the 'model' value
        if (model) {
          searchParams.set("model", model);
        } else {
          searchParams.delete("model");
        }
    
        // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
        if (manufacturer) {
          searchParams.set("manufacturer", manufacturer);
        } else {
           searchParams.delete("manufacturer");
        }
    
        // Generate the new pathname with the updated search parameters
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
        router.push(newPathname,{scroll: false})
    
      };


  return (
    <form className={'searchbar'} onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer manufacturer={manufacturer}  setManufacturer={setManufacturer}/>
        <SearchButton otherClasses={"sm:hidden"}/>
      </div>
         <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan...'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
        <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
}

export default SearchBar;

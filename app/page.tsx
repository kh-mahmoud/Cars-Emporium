import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { CarCardProps, FilterProps } from "@/types";
import { fetchCARS } from "@/utils";



export default async function Home({searchParams}:{searchParams:FilterProps}) {

   const allcars=await fetchCARS({
    manufacturer:searchParams.manufacturer || '',
    fuel:searchParams.fuel || '' ,
    year:searchParams.year || 2022 ,
    limit:searchParams.limit || 10 ,
    model:searchParams.model || '' ,
   })
   const isDataEmpty=!allcars || allcars.length<1


   return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y " id="discover">

        <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">
               Car Catalogue
            </h1>
            <p>Explore the cars you might like </p>
        </div>

        <div className="home__filters">
           <SearchBar/>

           <div className="home__filter-container ">
              <CustomFilter title={"fuel"} options={fuels}/>
              <CustomFilter title={"year"} options={yearsOfProduction}/>
           </div>
        </div>

           <div>
             {!isDataEmpty ?(
             <section>
                <div className="home__cars-wrapper">
                    {allcars?.map((car:CarCardProps,index:number) => (
                      <CarCard key={index} car={car} />
                    ))}
                </div>
                <ShowMore
                    pageNumber={(searchParams?.limit || 10)/10}
                    isNext={(searchParams?.limit || 10) <= allcars.length}
                    />

             </section>
             ) :(
                <div className="home__error-container">
                  <h2 className="text-2xl font-bold text-black">Oops! No cars found</h2>
                   <p>{allcars.message}</p> 'No cars found'
                </div>
             )}
           </div>
      </div>
    </main>

  )
}

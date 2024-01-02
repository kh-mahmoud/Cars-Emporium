import { Dispatch, SetStateAction } from "react"

export type CustomButtonProps={
     title:string,
     containerStyles?:string,
     handleClick?:React.MouseEventHandler<HTMLButtonElement>
     btnType:"button" | 'submit'
     textStyles?:string
     rightIcon?:string
}


export type SearchManufacturerProps={
     manufacturer:string | undefined
     setManufacturer: Dispatch<SetStateAction<undefined | string>>;
}

export type CarCardProps={
     city_mpg:number
     class:string
     combination_mpg:number
     cylinders:number
     displacement:number
     drive:string
     fuel_type:string
     highway_mpg:number
     make:string
     model:string
     transmission:string
     year:number
}

export type FilterProps=
{
  manufacturer: string
    year:number
    limit:number
    model:string 
    fuel:string
}

export type optionsProps={
   title:string
   value:string
}

export type CustomFilterProps={
   title:string
   options:optionsProps[]
}

export type ShowMoreProps={
     pageNumber:number
     isNext:boolean
}
'use client'
import Image from "next/image";
import Link from "next/link";
const Card=({title,icon,navigate})=>{
    return(
       <div>
           <Link href={navigate}>
               <div className='h-[180px] w-[150px] flex flex-col space-y-2 border border-black border-solid p-5 rounded-md'>
                   <div>
                       <Image src={icon} height={100} width={200} alt={'course'}/>
                   </div>
                   <div className='ml-6'>
                       <p>{title}</p>
                   </div>
               </div>
           </Link>
       </div>
    )
}
export default Card
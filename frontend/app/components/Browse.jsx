import React from "react";
import Image from "next/image";

const Browse=({browse_image,browse_name})=>{
    return(
        <div className="w-80 h-40 mb-4 bg-white rounded-lg border border-black p-4 mt-2 items-center justify-center flex gap-x-2 transition-transform transition-delay-500 ease hover:bg-[#1c4386] hover:scale-105 hover:h-48 hover:text-white hover:shadow-lg">
            <div className='mr-2'>
                <Image src={browse_image} alt={"Browse"} height={60} width={60} />
            </div>
            <div className='font-semibold text-4xl'>
                {browse_name}
            </div>
        </div>
    )
}
export default Browse;
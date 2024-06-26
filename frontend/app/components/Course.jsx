import React from 'react'
import Link from "next/link";

const Course=({course_name,course_code})=>{
    return(
        <div className="w-60 h-32 bg-white rounded-lg border border-black p-4 mt-2 items-center justify-center flex flex-col group transition-transform transition-delay-500 ease hover:shadow-lg hover:bg-[#1c4386] hover:w-70 hover:h-35 transform hover:scale-105">
            <div className='font-bold text-xl group-hover:text-white'>
                <Link href={'/courses'}>
                    {course_name}
                </Link>
            </div>
            <div className='font-semibold text-gray-500 group-hover:text-white'>
                {course_code}
            </div>
        </div>
    )
}
export default Course;
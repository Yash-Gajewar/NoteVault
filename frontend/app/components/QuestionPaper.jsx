import React from 'react'
import Link from "next/link";

const QuestionPaper=(props)=>{
    return(
        <div className="w-54 h-32 bg-white rounded-lg border border-black p-2 mt-2 items-center justify-center flex flex-col group transition-transform transition-delay-500 ease hover:shadow-lg hover:bg-[#1c4386] hover:w-70 hover:h-35 transform hover:scale-105">
            <div className='font-bold text-xl group-hover:text-white'>
                <Link href={'/papers'}>
                {props.course_name}
                </Link>
            </div>
            <div className='font-semibold text-gray-500 group-hover:text-white'>
                
                {props.paper_type}
                {" "}
                {props.year}
            </div>
        </div>
    )
}
export default QuestionPaper;
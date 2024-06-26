import React from 'react';
import Link from 'next/link';

const Synoptic = (props) => {
  return (
    <div className="relative">
      <div className="mr-4 w-52 h-32 bg-white rounded-lg border border-black p-2 mt-2 items-center justify-center flex flex-col group transition-transform transition-delay-500 ease hover:shadow-lg hover:bg-[#1c4386] hover:w-70 hover:h-35 transform hover:scale-105 z-20">
        <div className="absolute mr-4 right-0 top-0 h-2/3 bg-blue-500 w-4"></div>
        <div className="triangle"></div>
        <div className='font-bold text-xl group-hover:text-white z-10'>
          <Link href={'/papers'}>
            {props.course_name}
          </Link>
        </div>
        <div className='font-semibold text-gray-500 group-hover:text-white'>
          {props.paper_type} {props.year}
        </div>
      </div>
    </div>
  );
};


export default Synoptic;

import React from 'react'
// import Image from 'next/image'
// import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";


function BookComponent(props) {
    return (
        <div className="w-60 rounded-2xl shadow flex flex-col m-2 bg-white h-fit p-2 border border-gray-900 transition-transform transition-delay-500 ease hover:shadow-lg hover:bg-[#1c4386] hover:w-70 hover:h-35 transform hover:scale-105 group hover:text-white ">
            <div>
                {props.cover && props.imgAlt && (
                    <img src={props.cover} alt={props.imgAlt} className="w-full rounded-md" />
                )}
            </div>
            <hr className='w-55'></hr>
            <div className='flex flex-col items-center justify-center group hover:text-white'>
                {props.title && <h1 className="mt-2 mb-2">{props.title}</h1>}
                {props.author && <p className="mt-2 text-gray-400 group-hover:text-white">{props.author}</p>}
                {props.domain && <p className="mb-2 text-gray-400 group-hover:text-white">{props.domain}</p>}
            </div>
        </div>

    )
}

export default BookComponent
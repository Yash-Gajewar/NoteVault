import React from 'react'
import Image from 'next/image'
import AcceptButton from './AcceptButton'
import RejectButton from './RejectButton'
import Link from 'next/link'
const Request = (props) => {
    return (
        // contains two colums one for data and other for accept/reject button
        <div className='flex flex-row justify-between p-3 pl-5 pr-5 bg-red-200 w-full rounded-lg mb-5'>
            {/* data div */}
            <div>
                <Link href='' className='hover:underline font-light'><h1 className='text-xl font-semibold'>{props.title}</h1></Link>
                <div >
                    {props.branch} | {props.course} | {props.type}
                </div>
                <div className='mt-4 underline'>
                    Uploaded By: {props.user}
                </div>
            </div>
            {/* accept/reject div */}
            <div>
                <AcceptButton />
                <RejectButton />
            </div>

        </div>
    )
}

export default Request
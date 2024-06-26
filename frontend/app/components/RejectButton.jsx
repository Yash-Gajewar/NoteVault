import React from 'react';
import Image from 'next/image';

const RejectButton = () => {
    return (
        <div className='flex flex-row w-full mt-2 rounded-md px-2 py-1 '>
            <div className='relative w-10 h-10'>
                <Image
                    src='/decline.png'
                    layout='fill'
                    objectFit='contain'
                    alt='Reject Button'
                    className='transition duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110'
                />
            </div>
            {/* Other elements you might want to include */}
        </div>
    );
};

export default RejectButton;

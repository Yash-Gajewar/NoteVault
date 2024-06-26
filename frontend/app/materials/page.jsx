// import Books from "@/app/books/page";
'use client'
import BookComponent from "@/app/components/BookComponent";
import React from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ReactPlayer from "react-player";
import {useSearchParams} from "next/navigation";
const Material=()=>{
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    const slider1Left = () => {
        var slider1 = document.getElementById('slider1');
        slider1.scrollLeft = slider1.scrollLeft - 500;
    };

    const slider1Right = () => {
        var slider1 = document.getElementById('slider1');
        slider1.scrollLeft = slider1.scrollLeft + 500;
    };
    const searchParams=useSearchParams();
    const title=searchParams.get('courseName')
    return(
        <div>
            <h2 className='font-semibold text-2xl mb-2 mt-2 ml-2'>Books for {title}</h2>

            <div className='grid grid-cols-1 mb-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 ml-10 pt-3'>
                <BookComponent
                    cover="/book.png"
                    title ={title}
                    author = "Thomas Cormen"
                    domain="Data Structures"
                    imgAlt={'Book'}
                />
                <BookComponent
                    cover="/book.png"
                    title = {title}
                    author = "Thomas Cormen"
                    domain="Data Structures"
                    imgAlt={'Book'}
                />
                <BookComponent
                    cover="/book.png"
                    title = {title}
                    author = "Thomas Cormen"
                    domain="Data Structures"
                    imgAlt={'Book'}
                />
                <BookComponent
                    cover="/book.png"
                    title = {title}
                    domain="Data Structures"
                    author = "Thomas Cormen"
                    imgAlt={'Book'}
                />
                <BookComponent
                    cover="/book.png"
                    title = {title}
                    domain="Data Structures"
                    author = "Thomas Cormen"
                    imgAlt={'Book'}
                />
            </div>
            <h2 className='font-semibold text-2xl mb-2 mt-2 ml-2'>Notes for {title}</h2>

            <div className='relative flex items-center mb-4'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                <div
                    id='slider'
                    className='w-full h-full overflow-x-scroll flex flex-row scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                    <BookComponent
                        cover="/book.png"
                        title = "Introduction to Algorithms"
                        author = "Thomas Cormen"
                        domain="Data Structures"
                        imgAlt={'Book'}
                    />
                    <BookComponent
                        cover="/book.png"
                        title = "Introduction to Algorithms"
                        author = "Thomas Cormen"
                        domain="Data Structures"
                        imgAlt={'Book'}
                    />
                    <BookComponent
                        cover="/book.png"
                        title = "Introduction to Algorithms"
                        author = "Thomas Cormen"
                        domain="Data Structures"
                        imgAlt={'Book'}
                    />
                    <BookComponent
                    cover="/book.png"
                    title = "Introduction to Algorithms"
                    author = "Thomas Cormen"
                    domain="Data Structures"
                    imgAlt={'Book'}
                    />
                    <BookComponent
                        cover="/book.png"
                        title = "Introduction to Algorithms"
                        author = "Thomas Cormen"
                        domain="Data Structures"
                        imgAlt={'Book'}
                    />
                    <BookComponent
                        cover="/book.png"
                        title = "Introduction to Algorithms"
                        author = "Thomas Cormen"
                        domain="Data Structures"
                        imgAlt={'Book'}
                    />
                    <BookComponent
                        cover="/book.png"
                        title = "Introduction to Algorithms"
                        author = "Thomas Cormen"
                        domain="Data Structures"
                        imgAlt={'Book'}
                    />
                    <BookComponent
                        cover="/book.png"
                        title = "Introduction to Algorithms"
                        domain="Data Structures"
                        author = "Thomas Cormen"
                        imgAlt={'Book'}
                    />
                    <BookComponent
                        cover="/book.png"
                        title = "Introduction to Algorithms"
                        domain="Data Structures"
                        author = "Thomas Cormen"
                        imgAlt={'Book'}
                    />
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
            </div>
            <h2 className='font-semibold text-2xl mb-2 mt-2 ml-2'>Reference Videos for {title}</h2>
            <div className='relative flex items-center mb-2'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slider1Left} size={40} />
                <div
                    id='slider1'
                    className='w-full h-full mb-2 overflow-x-scroll flex flex-row scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                    <ReactPlayer controls={true} light={true} style={{margin:'2px'}} url='https://youtu.be/WdmbZnUesRw?feature=shared'/>
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slider1Right} size={40} />

            </div>

        </div>
    )
}
export default Material
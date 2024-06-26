"use client";
import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import BookComponent from "@/app/components/BookComponent";
import Course from "@/app/components/Course";
import Browse from "@/app/components/Browse";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="ml-5 mt-4">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-semibold mb-2">Popular Books</h1>
          <div className="flex flex-row gap-x-2 mr-10 items-center">
            <Link href={"/books"}>
              <p className="text-right">Explore</p>
            </Link>
            <Link href={"/books"}>
              <Image
                src={"/right.svg"}
                alt={"Arrow"}
                height={25}
                width={25}
              />
            </Link>
          </div>
        </div>
        <div className="h-1.5 w-40 bg-black"></div>
      </div>
    
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 ml-10 pt-3">
          <BookComponent
            cover="/book.png"
            title="Introduction to Algorithms"
            author="Thomas Cormen"
            domain="Data Structures"
            imgAlt={"Book"}
          />
          <BookComponent
            cover="/book.png"
            title="Introduction to Algorithms"
            author="Thomas Cormen"
            domain="Data Structures"
            imgAlt={"Book"}
          />
          <BookComponent
            cover="/book.png"
            title="Introduction to Algorithms"
            author="Thomas Cormen"
            domain="Data Structures"
            imgAlt={"Book"}
          />
          <BookComponent
            cover="/book.png"
            title="Introduction to Algorithms"
            domain="Data Structures"
            author="Thomas Cormen"
            imgAlt={"Book"}
          />
          <BookComponent
            cover="/book.png"
            title="Introduction to Algorithms"
            domain="Data Structures"
            author="Thomas Cormen"
            imgAlt={"Book"}
          />
        </div>
      
      <div className="mt-4 ml-5 mb-4 p-1">
        <div className="flex flex-row justify-between">
          <h2 className="font-bold text-2xl">Courses</h2>
          <div className="flex flex-row gap-x-2 mr-10 items-center">
            <Link href={"/books"}>
              <p className="text-right">Explore</p>
            </Link>
            <Link href={"/books"}>
              <Image
                src="/right.svg"
                alt={"Arrow"}
                height={25}
                width={25}
              />
            </Link>
          </div>
        </div>
        <div className="h-1.5 w-40 bg-black"></div>
        <div className="flex flex-row justify-evenly mb-4 mt-2">
          <Course course_name={"Data Structures"} course_code={"CS201"} />
          <Course course_name={"Data Structures"} course_code={"CS201"} />
          <Course course_name={"Data Structures"} course_code={"CS201"} />
          <Course course_name={"Data Structures"} course_code={"CS201"} />
          <Course course_name={"Data Structures"} course_code={"CS201"} />
        </div>
      </div>
      <div className="mt-4">
        <p className="flex justify-center items-center text-2xl font-bold ">
          Browse By
        </p>
        <div className="flex flex-row justify-evenly mb-4 mt-4 flex-wrap">
          <Browse browse_image={"/course.png"} browse_name={"Course"} />
          <Browse browse_image={"/book.png"} browse_name={"Books"} />
          <Browse browse_image={"/paper.png"} browse_name={"Papers"} />
          <Browse browse_image={"/Notes.png"} browse_name={"Notes"} />
          <Browse
            browse_image={"/University.png"}
            browse_name={"Universities"}
          />
          <Browse browse_image={"/video.png"} browse_name={"Videos"} />
        </div>
      </div>
    </div>
  );
}

"use client"
import React, { useState } from "react";
import Heading from "../../ui/Heading";
import P from "../../ui/P";
import Button from "../../ui/Button";
import UserName from "../../ui/userName";
import Image from "next/image";

const trendingBlogs = [
  {
    author: "John Doe",
    date: "Aug 23, 2023",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    author: "John Deo",
    date: "Aug 23, 2023",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",

  },
  {
    author: "John Deo",
    date: "Aug 23, 2023",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",

  },
  {
    author: "John Deo",
    date: "Aug 23, 2023",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",

  },
];

const BlogSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState<number | null>(1)
  return (
    <section className="container mx-auto px-5 md:px-16 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT: Latest Blog */}
        <div className="lg:col-span-2 space-y-5">
          <Heading text="Latest" variant="heading2" />


          <div className="">
            <Image
              src="/images/car-image.png" // replace with your image
              alt="Latest Blog"
              width={500}
              height={500}
              className="w-full h-auto object-cover mb-6"
            />
            <div className="border border-gray-200 p-4">
              <P text={<>By <UserName text={'John Doe'} />
                | March 12, 2024</>} className="flex text-gray-500" />


              <Heading variant="subHeading" text={<>Lorem ipsum dolor sit amet, consectetur aising elit, sed do eiusmod tempor.</>} />



              <P text={<> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
                <br />
                Duis aute irure dolor in reprehenderit in voluptate v
                <br />
                Duis aute irure dolor in reprehenderit in volusse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.</>} variant="gray" />

              <Button text="Read more" variant="orange" className="w-[200px]" />
            </div>


          </div>
        </div>

        {/* RIGHT: Trending Blogs */}
        <div>
          <div className="flex items-center justify-between mb-6">

            <Heading text="Trending Blogs" variant="heading2" />
            <a
              href="#"
              className="text-sm font-medium text-[#232536] hover:underline"
            >
              See all
            </a>
          </div>

          {/* Trending List */}
          <div className="flex flex-col gap-2">
            {trendingBlogs.map((blog, index) => (
              <div
                key={index}

                className={`p-2  cursor-pointer ${isHovered === index
                  && "bg-[#FF5E5E] text-white"

                  }`}
                onMouseEnter={() => { setIsHovered(index) }}
                onMouseLeave={() => { setIsHovered(1) }}
              >
                <P
                  text={
                    <>
                      By{" "}
                      <UserName text={blog.author} className={isHovered === index ? 'text-white' : ''} /> | {blog.date}
                    </>
                  }
                  variant={isHovered === index ? "default" : "gray"}
                  className=""
                />
                <Heading variant="subHeading" text={blog.title} className={isHovered === index ? 'text-white mb-0' : 'mb-0'} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;

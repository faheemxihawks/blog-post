import React from "react";
import Heading from "../../ui/Heading";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    image: "/images/newsCard1image.png", // replace with your actual image path
    title: "A Review Of Cars With Advanced Infotainment Systems",
    author: "Dasteen",
    date: "Jan 10, 2024",
    readTime: "3 Min Read",
  },
  {
    id: 2,
    image: "/images/newsCard2image.png",
    title: "A Deep Dive Into Sports Cars",
    author: "Dasteen",
    date: "Jan 10, 2024",
    readTime: "3 Min Read",
  },
  {
    id: 3,
    image: "/images/newsCard3image.png",
    title: "Reviewing Cars With The Best Resale Value",
    author: "Dasteen",
    date: "Jan 10, 2024",
    readTime: "3 Min Read",
  },
  {
    id: 4,
    image: "/images/newsCard4image.png",
    title: "Reviewing Cars With The Best Resale Value",
    author: "Dasteen",
    date: "Jan 10, 2024",
    readTime: "3 Min Read",
  },
];

const TechBlogSection: React.FC = () => {
  return (
    <section className="container mx-auto p-4 px-5 md:px-16">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
     
           <Heading variant="subHeading" text={<>  New Technology</>} />
          <div className="w-10 bg-[#232536]"></div>
        </div>
        <a href="#" className="text-sm font-medium text-[#232536] hover:underline">
          See All
        </a>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#F4F4F6] space-y-5 p-3 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <Image
              src={blog.image}
              width={500}
              height={500}
              alt={blog.title}
              className="w-full h-52 rounded-xl object-cover"
            />
            <div className="">
             
              <Heading variant="subHeading2" text={blog.title}  />

              <div className="flex items-center gap-3 mt-10">
                <Image
                  src="/images/Dasteen.png" // replace with actual avatar
                  alt={blog.author}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-sm text-[#232536]/70">
                  <p className="font-semibold text-[#232536]">{blog.author}</p>
                  <p className="text-xs">
                    {blog.date} • {blog.readTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechBlogSection;

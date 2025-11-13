import React from "react";
import Heading from "../../ui/Heading";
import P from "../../ui/P";
import Image from "next/image";

const categories = [
    {
        id: 1,
        title: "Car Reviews",
        description:
            "Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendreit in.",
        image: "/images/catagory1image.png", // replace with your image path
    },
    {
        id: 2,
        title: "Maintenance Tips",
        description:
            "Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendreit in.",
        image: "/images/catagory2image.png",
    },
    {
        id: 3,
        title: "Car Modifications",
        description:
            "Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendreit in.",
        image: "/images/catagory3image.png",
    },
    {
        id: 4,
        title: "Driving Tips",
        description:
            "Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendreit in.",
        image: "/images/catagory4image.png",
    },
];

const CategorySection: React.FC = () => {
    return (
        <section className="container mx-auto px-5 md:px-16 p-4">
            {/* Header */}
            <div className="flex items-center gap-6">

                <Heading variant="subHeading" text={<> All Category</>} />
                <div className="w-10 h-0.5 bg-[#232536]"></div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="bg-[#F4F4F6] rounded-2xl text-center p-8 shadow-sm hover:shadow-md transition"
                    >
                        <div className="flex justify-center mb-5">
                            <Image
                                src={category.image}
                                alt={category.title}
                                width={200}
                                height={200}
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        </div>

                        <Heading variant="subHeading2" text={category.title} />
                        <P text={category.description} variant="gray" />

                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;

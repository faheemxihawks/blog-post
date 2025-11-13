import React from "react";
import { Send } from "lucide-react"; // For the paper plane icon
import Heading from "../../ui/Heading";
import P from "../../ui/P";
import Button from "../../ui/Button";

const Hero: React.FC = () => {
    return (
        <section
            className="relative w-full  bg-cover bg-center flex items-center"
            style={{
                backgroundImage:
                    "url('/images/HeroBg.png')", // replace with your actual image path
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-5 md:px-16 py-16 text-white">
                <Heading text={<>Your Journey <br />
                    Your Car <br />
                    Ytour Way</>} className="" variant="Heading1" />

                <P text={<>Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum
                    vel euismod aliquam. Amet ultrices neque augue consectetur purus
                    phasellus. Ullamcorper lorem montes varius amet vestibulum tellus
                    facilisis consequat pretium. Et faucibus laoreet molestie diam semper
                    fames diam eget.</>} variant="default" className="md:w-[50%]"/>


                <Button text={<>Subscribe <Send size={18} /></>} className="" variant="orange"/>

            </div>
        </section>
    );
};

export default Hero;

import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"FORGING TECH PROWESS SINCE 2022."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Hi there 👋 , I'm Carlos, a 21-year-old guy who's been passionate about computers for as long as I can remember. My programming journey started in late 2022, and it's been an incredible adventure. I've always been curious about tech, ever since I got my first computer at age 12. Recently, I completed a Frontend Bootcamp, where I learned React and the ins and outs of frontend development. After that, I spent 6 months in a Fullstack Bootcamp, where I delved into web development, including creating APIs and working with databases. I'm enthusiastic about coding, and I'm excited about the opportunity to contribute to a company. React is my absolute favorite, and I'm ready for new challenges!" />

                        <AnimatedBody
                            delay={0.1}
                            text="My goal is to work as a web developer specializing in React. Whether I'm crafting elegant user interfaces or building complex applications, my passion lies in creating innovative solutions. I thrive on experimenting with emerging technologies and staying at the forefront of tech trends."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="I have a deep appreciation for the art of testing in software development, a facet often overlooked. I find joy in ensuring the reliability and quality of applications. While I'm currently engrossed in exciting projects, I'm always eager for fresh opportunities and collaborations to bring testing excellence to the forefront."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

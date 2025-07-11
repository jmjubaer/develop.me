"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import SkillsCard from "../shered/UI/SkillsCard";
import SectionTag from "../shered/UI/SectionTag";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaWebflow } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
const Skills = () => {
    return (
        <div className='-mt-14 bg-black main_container secondary_section_bg'>
            <div className='flex lg:items-center justify-between flex-col lg:flex-row'>
                <div className=''>
                    <SectionTag text='Why Choose me' />
                    <h2 className='font-bold text-3xl sm:text-5xl md:text-[58px] sm:mt-10 mt-7 leading-normal'>
                        My Extensive <br /> List of Skills
                    </h2>
                </div>
                <div className='border-b border-white w-full lg:w-[350px] leading-loose pb-5 lg:text-right'>
                    <p>
                        Building the worlds best marketing Your trusted partner
                        for strategy, design, and dev.
                    </p>
                </div>
            </div>
            <div className='mt-14'>
                {/* todo: change  navigator */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    breakpoints={{
                       
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className='skills-swiper '>
                    <SwiperSlide>
                        <SkillsCard
                            title='HTML & CSS'
                            text='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'>
                            <FaHtml5 className='text-8xl' />
                        </SkillsCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillsCard
                            title='Javascript'
                            text='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'>
                            <IoLogoJavascript className='text-8xl' />
                        </SkillsCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillsCard
                            title='Webflow'
                            text='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'>
                            <FaWebflow className='text-8xl' />
                        </SkillsCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillsCard
                            title='Next js'
                            text='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'>
                            <SiNextdotjs className='text-8xl' />
                        </SkillsCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillsCard
                            title='Tailwind CSS'
                            text='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'>
                            <RiTailwindCssFill className='text-8xl' />
                        </SkillsCard>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Skills;

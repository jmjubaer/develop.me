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
const Skills = () => {
    return (
        <div className='main_container text-white bg-black rounded-[40px] p-16'>
            <div className='flex items-center justify-between'>
                <div className=''>
                    <SectionTag text="Why Choose me"/>
                    <h2 className='font-bold text-[58px] mt-10 leading-normal'>
                        My Extensive <br /> List of Skills
                    </h2>
                </div>
                <div className='border-b border-white w-[350px] leading-loose pb-5 text-right'>
                    <p>
                        Building the worlds best marketing Your trusted partner
                        for strategy, design, and dev.
                    </p>
                </div>
            </div>
            <div className=''>
                {/* todo: change  navigator */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={5}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className='skills-swiper'>
                    <SwiperSlide>
                        <SkillsCard
                            title='HTML & CSS'
                            text='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillsCard
                            title='Javascript'
                            text='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillsCard
                            title='Webflow'
                            text='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillsCard
                            title='Next js'
                            text='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillsCard
                            title='Tailwind CSS'
                            text='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Skills;

import Image from "next/image";
import SectionTag from "../shered/UI/SectionTag";
import image from "@/assets/company.png";
const Experience = () => {
    return (
        <div className='experience_section_bg pt-20 sm:pt-32'>
            <div className='main_container'>
                <div className=' lg:w-4/5 mx-auto '>
                    <div className='flex justify-end'>
                        <SectionTag text='About' />
                    </div>
                    <h2 className='title_text text-right mt-8'>
                        I’ve been{" "}
                        <span className='text_highlight'>Developing</span>{" "}
                        <br /> Websites since{" "}
                        <span className='text_highlight'>2013</span>
                    </h2>
                    <p className='text-center sm:text-lg mt-4'>
                        We start every new client interaction with an in-depth
                        discovery call where we get to know each other and
                        recommend the best course of action.
                    </p>
                </div>
                <div className='grid lg:grid-cols-5 items-center sm:mt-[70px] mt-10'>
                    <p className='sm:text-[26px] text-xl lg:text-center'>
                        PREVIOUSLY WORKED ON
                    </p>
                    <div className='col-span-4 flex  flex-wrap'>
                        {/* Todo: improve more */}
                        <Image src={image} alt='' className='w-full mt-5 lg:mt-0' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;

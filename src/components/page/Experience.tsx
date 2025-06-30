import Image from "next/image";
import SectionTag from "../shered/UI/SectionTag";
import image from "@/assets/company.png"
const Experience = () => {
    return (
        <div className='experience_section_bg pt-32'>
            <div className=' w-4/6 mx-auto'>
                <div className='flex justify-end'>
                    <SectionTag text='About' />
                </div>
                <h2 className='title_text text-right'>
                    I’ve been <span className='text_highlight'>Developing</span>{" "}
                    <br /> Websites since{" "}
                    <span className='text_highlight'>2013</span>
                </h2>
                <p className='text-center text-lg'>
                    We start every new client interaction with an in-depth
                    discovery call where we get to know each other and recommend
                    the best course of action.
                </p>
            </div>
            <div className="grid grid-cols-5 main_container items-center mt-[70px]">
                <p className="text-[26px] text-center">PREVIOUSLY WORKED ON</p>
                <div className="col-span-4 flex  flex-wrap">
                    {/* Todo: improve more */}
                    <Image src={image} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Experience;

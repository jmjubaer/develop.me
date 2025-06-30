import React from "react";
import SectionTag from "../shered/UI/SectionTag";
import WorkProcessCard from "../shered/UI/WorkProcessCard";
import { workProcesses } from "@/data/data";

const WorkProcess = () => {
    return (
        <div className='bg-[#141414] main_container secondary_section_bg'>
            <div className='relative'>
                <div className='absolute top-1/2 -translate-y-1/2'>
                    <SectionTag text='Work Process' />
                </div>

                <h2 className='text-[58px] font-bold text-center'>
                    My Work Process
                </h2>
            </div>
            <div className='grid grid-cols-2 gap-2.5 mt-12'>
                {workProcesses.map((workProcess, index) => (
                    <WorkProcessCard
                        key={index}
                        tag={workProcess.tag}
                        text={workProcess.description}
                    />
                ))}

                {/* make clean and readable  */}
                {/* <WorkProcessCard
                    tag='Discovery'
                    text=' We start every new client interaction with an in-depth discovery
                call where we get to know each other, discuss your current and
                future objectives, and recommend the best course of action.'
                />{" "}
                <WorkProcessCard
                    tag='Strategy'
                    text='Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we`re here to set the stage for success.'
                />{" "}
                <WorkProcessCard
                    tag='Design'
                    text='After we have a comprehensive understanding of your brand, we`ll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.'
                />{" "}
                <WorkProcessCard
                    tag='Build'
                    text=' Whether we`ve just finished designing your new site or you`re handing off finished designs for us to develop in Webflow, we`re here to apply our trusted development process to your project.'
                /> */}
            </div>
        </div>
    );
};

export default WorkProcess;

import Banner from "@/components/page/Banner";
import Experience from "@/components/page/Experience";
import Skills from "@/components/page/Skills";
import WorkProcess from "@/components/page/WorkProcess";
import React from "react";

const HomePage = () => {
    return (
        <div className=''>
            <Banner />
            <Skills />
            <Experience />
            <WorkProcess/>
        </div>
    );
};

export default HomePage;

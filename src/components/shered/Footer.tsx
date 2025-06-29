import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className='bg-black main_container secondary_section_bg -mt-10'>
            <div className='grid grid-cols-5 gap-5'>
                <div className='col-span-2'>
                    <Link
                        href={"/"}
                        className='font-secondary text-[34px] text-[#C5FF41]'>
                        DEVELOP.ME
                    </Link>
                </div>
                <div className='col-span-3 '>
                    <h3 className='text-[64px] leading-none'>As You Can</h3>
                    <div className='grid grid-cols-4 gap-5 my-32'>
                        <div className='col-span-2'>
                            <h3 className='text-[#757575] font-bold'>
                                Say hello
                            </h3>
                            <p className='text-[#E4E4E4] mt-5'>
                                HELLO@DEVLOP.ME.COM
                            </p>
                            <p className='text-[#E4E4E4] mt-2'>
                                MAHBUBUL@ME.COM
                            </p>

                            <h3 className='text-[#757575] font-bold mt-[53px]'>
                                Call
                            </h3>
                            <p className='text-[#E4E4E4] mt-5'>
                                +784549 4981 00
                            </p>
                            <p className='text-[#E4E4E4] mt-2'>
                                +8845 0100 211
                            </p>
                        </div>{" "}
                        <div className=''>
                            <h3 className='text-[#757575] font-bold'>Menu</h3>
                            <p className='text-[#E4E4E4] mt-5'>HOME</p>
                            <p className='text-[#E4E4E4] mt-2'>ABOUT</p>
                            <p className='text-[#E4E4E4] mt-2'>PORTFOLIO</p>
                            <p className='text-[#E4E4E4] mt-2'>BLOG</p>
                        </div>{" "}
                        <div className=''>
                            <h3 className='text-[#757575] font-bold'>Social</h3>
                            <p className='text-[#E4E4E4] mt-5'>TWITTER</p>
                            <p className='text-[#E4E4E4] mt-2'>INSTAGRAM</p>
                            <p className='text-[#E4E4E4] mt-2'>FACEBOOK</p>
                            <p className='text-[#E4E4E4] mt-2'>BEHANCE</p>
                            <p className='text-[#E4E4E4] mt-2'>DRIBBBLE</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <h3 className='font-secondary text-[34px] '>
                    BESNIK
                </h3>
                <p className="opacity-50">© devlop.me 2022</p>
                <div className="opacity-50">
                        <Link href={"/"}>PRIVACY</Link> - <Link href={"/"}>TERMS</Link> 
                </div>
            </div>
        </footer>
    );
};

export default Footer;

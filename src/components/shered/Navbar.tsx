"use client";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./UI/Button";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
    const [control, setControl] = useState(false);
    console.log(control);
    return (
        <div className=''>
            <div className='main_container flex justify-between items-center py-7'>
                <Link className='font-secondary text-[34px]' href={"/"}>
                    DEVELOP.ME
                </Link>
                <button
                    onClick={() => setControl(true)}
                    className='block md:hidden cursor-pointer'>
                    {<FaBars className="text-3xl"/>}
                </button>
                <nav
                    className={`fixed md:static transition-all duration-500 bg-black/90 md:bg-transparent md:h-fit h-screen text-white md:text-black top-0 left-0 md:w-fit overflow-hidden ${
                        control ? "w-full" : "w-0"
                    }`}>
                    <ul className='flex items-center flex-col md:flex-row gap-9 mt-20 md:mt-0'>
                        <li className='absolute top-7 right-7'>
                            <button
                                onClick={() => setControl(false)}
                                className='block md:hidden z-40 cursor-pointer'>
                                <FaTimes className='text-3xl' />
                            </button>
                        </li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                        <li>
                            <Button>
                                <IoIosArrowRoundForward className='button_icon text-4xl' />
                                Start Project
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;

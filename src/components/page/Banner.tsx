import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import Navbar from "../shered/Navbar";
import Button from "../shered/UI/Button";

const Banner = () => {
    return (
        <div className='banner_bg min-h-screen '>
            <Navbar />
            <div className='main_container pt-28 pb-44'>
                <h1 className='title_text'>
                    Trusted <span className='text_highlight'>Partner</span> for{" "}
                    <br /> Your Website{" "}
                    <span className='text_highlight'>Develop.</span>
                </h1>
                <div className='grid grid-cols-4 items-center h-fit mt-12'>
                    <div className='w-full relative'>
                        <div className='-rotate-90 h-fit absolute -left-15 -top-8'>
                            <p className='text-lg '>@williamrey</p>
                            <ul className='flex items-center gap-5 mt-5'>
                                <li>
                                    <hr className='h-[2px] w-11 bg-black' />
                                </li>
                                <li>
                                    <FaFacebook className='text-2xl' />
                                </li>
                                <li>
                                    <FaInstagram className='text-2xl' />
                                </li>
                                <li>
                                    <FaTwitter className='text-2xl' />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <p className='sm:w-3/4 sm:text-lg sm:mb-10 mb-7'>
                            Building the worlds best marketing websites for over
                            a decade. Your trusted partner for strategy, design,
                            and dev.
                        </p>
                        <Button>
                            <span className='inline-block border rounded-full'>
                                <FaPhoneAlt className=' m-2 text-lg' />
                            </span>
                            Schedule a Call
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

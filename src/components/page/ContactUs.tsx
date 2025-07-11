import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaPhoneAlt,
    FaTwitter,
} from "react-icons/fa";
import SectionTag from "../shered/UI/SectionTag";
import Button from "../shered/UI/Button";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

const ContactUs = () => {
    return (
        <div className='contact_section_bg pt-[51px] pb-40'>
            <div className='main_container lg:grid lg:grid-cols-12 items-center lg:gap-8'>
                <div className='lg:col-span-7 col-span-12'>
                    <SectionTag text='Contact' />
                    <h2 className='title_text mt-10'>
                        Interested in{" "}
                        <span className='text_highlight'>work</span> together?
                    </h2>
                    <p className='text-lg mt-4 mb-8'>
                        We start every new client interaction with an in-depth
                        discovery call where we get to know each other
                    </p>
                    <Button>
                        <span className='inline-block border rounded-full'>
                            <FaPhoneAlt className=' m-2 text-lg' />
                        </span>
                        Schedule a Call
                    </Button>
                </div>
                <div className='bg-black lg:px-9 sm:px-7 px-4 sm:py-11 py-5 text-white lg:col-span-5 col-span-12 rounded-[30px] h-fit mt-8 lg:mt-0'>
                    {/* Todo: add submit handler */}
                    <form>
                        <input
                            type='text'
                            placeholder='Enter your name'
                            className='py-3 w-full outline-0 border-b opacity-50 focus:opacity-100'
                        />
                        <input
                            type='text'
                            placeholder='Your email address'
                            className='py-3 w-full outline-0 border-b mt-7 opacity-50 focus:opacity-100'
                        />
                        <input
                            type='text'
                            placeholder='Describe your project'
                            className='py-3 w-full outline-0 border-b mt-7 opacity-50 focus:opacity-100'
                        />
                        <div className='mt-11 flex items-center gap-3 flex-col sm:flex-row'>
                            <button type="button" className='border cursor-pointer border-white rounded-full py-2 pr-7 flex items-center gap-3'>
                                <span className='inline-block border rounded-full'>
                                    <PiPaperPlaneTiltFill className=' m-2 text-lg' />
                                </span>
                                Send
                            </button>
                            <p className='text-lg'>or</p>
                            <a
                                href='mailto:williamrey@email.com'
                                className='border cursor-pointer border-white rounded-full py-2 sm:pr-7 pr-4 flex items-center gap-3'>
                                <span className='inline-block border rounded-full'>
                                    <FaEnvelope className=' m-2 text-lg' />
                                </span>
                                Contact me
                            </a>
                        </div>
                        <ul className='flex items-center sm:gap-5 gap-3  sm:mt-14 mt-5'>
                            <li>
                                <p className='text-lg opacity-70'>
                                    @williamrey
                                </p>
                            </li>{" "}
                            <li>
                                <hr className='h-[2px] w-11 bg-white opacity-40' />
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./UI/Button";
const Navbar = () => {
    return (
        <div className='main_container flex justify-between items-center my-7'>
            <Link className='font-secondary text-[34px]' href={"/"}>
                DEVELOP.ME
            </Link>
            <nav>
                <ul className='flex items-center gap-9'>
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
    );
};

export default Navbar;

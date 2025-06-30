import { IoIosArrowRoundForward } from "react-icons/io";

const WorkProcessCard = ({ tag, text }: { tag: string; text: string }) => {
    return (
        <div className='bg-black rounded-[30px] p-4 sm:p-[30px] transition-all duration-500 hover:rotate-[4deg] hover:text-black hover:bg-[#C5FF41] group'>
            <div className='flex items-center justify-between'>
                <span className='bg-[#C5FFEE] group-hover:bg-black group-hover:text-white text-black sm:text-xl sm:px-9 px-4 py-1 rounded-full'>
                    {tag}
                </span>
                <a href='#' className='flex items-center gap-1 underline'>
                    {" "}
                    <IoIosArrowRoundForward className='sm:text-2xl text-lg' />
                    Read More
                </a>
            </div>
            <p className='sm:text-lg mt-11'>{text}</p>
        </div>
    );
};

export default WorkProcessCard;

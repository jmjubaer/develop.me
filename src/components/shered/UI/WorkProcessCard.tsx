import { IoIosArrowRoundForward } from "react-icons/io";

const WorkProcessCard = ({ tag, text }: { tag: string; text: string }) => {
    return (
        <div className='bg-black rounded-[30px] p-[30px] transition-all duration-500 hover:rotate-[4deg] hover:text-black hover:bg-[#C5FF41] group'>
            <div className='flex items-center justify-between'>
                <span className='bg-[#C5FFEE] group-hover:bg-black group-hover:text-white text-black text-xl px-9 py-1 rounded-full'>
                    {tag}
                </span>
                <a href='#' className='flex items-center gap-1 underline'>
                    {" "}
                    <IoIosArrowRoundForward className='text-2xl' />
                    Read More
                </a>
            </div>
            <p className='text-lg mt-11'>{text}</p>
        </div>
    );
};

export default WorkProcessCard;

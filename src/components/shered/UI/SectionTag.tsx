import { FaArrowDown } from "react-icons/fa";

const SectionTag = ({ text }: { text: string }) => {
    return (
        <div className='flex items-center pt-32'>
            <p className='border  p-4 w-fit rounded-full'>
                <FaArrowDown />
            </p>
            <p className='border p-3 px-5 w-fit rounded-full'>{text}</p>
        </div>
    );
};

export default SectionTag;

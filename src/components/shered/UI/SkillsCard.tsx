import Image from "next/image";
import icon from "@/assets/icon.png";

const SkillsCard = ({ title, text }: { title: string; text: string }) => {
    return (
        <div className='bg-white/8 py-12 px-10 w-fit rounded-[30px] hover:rotate-6 transition-all duration-500'>
            {/* TODO: Change icon */}
            <Image
                src={icon}
                alt='skill icon'
                className='w-[90] h-[90] object-cover'
                width={90}
                height={90}
            />

            <h3 className='text-[26px] font-bold mt-[35px] mb-5'>{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default SkillsCard;

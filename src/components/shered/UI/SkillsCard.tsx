

const SkillsCard = ({
    title,
    text,
    children,
}: {
    title: string;
    text: string;
    children: React.ReactNode;
}) => {
    return (
        <div className='bg-white/8 sm:py-12 sm:px-10 p-7 w-fit rounded-[30px] hover:rotate-6 transition-all duration-500'>
            {/* TODO: Change icon */}
            {children}

            <h3 className='text-[26px] font-bold sm:mt-[35px] sm:mb-5 mt-5 mb-3'>{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default SkillsCard;

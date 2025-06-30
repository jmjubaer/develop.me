

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
        <div className='bg-white/8 py-12 px-10 w-fit rounded-[30px] hover:rotate-6 transition-all duration-500'>
            {/* TODO: Change icon */}
            {children}

            <h3 className='text-[26px] font-bold mt-[35px] mb-5'>{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default SkillsCard;

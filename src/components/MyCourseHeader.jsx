import imgLogo from '../assets/w-logo.png';

export default function MyCourseHeader({ selectedOption, setSelectedOption,options }) {
    
    const handleSelect = (option) => {
        setSelectedOption(option);  // Update the state in the parent component
    };

    return (
        <>
            <header className='bg-[#252641] h-[110px] flex justify-center '>
                <div className="max-w-[1280px] w-full flex flex-col justify-between h-full">
                    <img
                        src={imgLogo}
                        alt="Logo"
                        style={{ width: '250px', height: '75px' }}
                    />
                    <div className="text-white font-bold flex flex-row gap-x-8 mt-auto">
                        {options.map((option) => (
                            <span
                                key={option}
                                onClick={() => handleSelect(option)}
                                className={`cursor-pointer relative pb-1 ${selectedOption === option ? 'border-b-4 border-[#B1B4FF]' : ''}`}
                            >
                                {option}
                            </span>
                        ))}
                    </div>
                </div>
            </header>
        </>
    );
}

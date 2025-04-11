export function RelatedBlogIMG({ image, title, description,text }) {
    return (
        <div className="relative p-4 w-full md:w-1/2 flex justify-center">
            <div className="h-full w-2/3 border-2 p-4 border-gray-200 border-opacity-60 rounded-xl overflow-hidden bg-white ">
                <img
                    className="h-48 w-full object-cover object-center rounded-xl"
                    src={image}
                    alt="blog"
                />
                <div className="p-6 pb-2">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {title}
                    </h1>
                    <p className="leading-relaxed text-left text-xl mb-2 font-medium">{description}</p>
                    <p className="leading-relaxed text-left text-sm text-gray-300 mb-2 font-medium min-h-20 ">{text}</p>
                    <div className="flex items-center flex-wrap">
                        <a className="text-indigo-500 text-xl inline-flex items-center md:mb-2 lg:mb-0  cursor-pointer">
                            Learn More
                            <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                            <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}   
// import {
//     Card,
//     CardHeader,
//     CardBody,
//     Typography,
// } from "@material-tailwind/react";

export function BackgroundBlogCard({ image, title, onClick }) {
    return (
        <Card
            shadow={false}
            className="relative grid w-full max-w-[18rem] h-70 items-end justify-center overflow-hidden text-center border border-gray-300 cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out"
            onClick={onClick} // Add onClick handler
        >
            {/* Shadow animation */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-600 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 m-0 h-full w-full rounded-none"
            >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t" />
            </CardHeader>
            <CardBody className="">
                <Typography
                    variant="h2"
                    color="white"
                    className="text-lg text-black font-black leading-[1.5] p-2 absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center shadow-lg bg-white/50 w-[70%] rounded-lg"
                >
                    {title}
                </Typography>
            </CardBody>
        </Card>
    );
}
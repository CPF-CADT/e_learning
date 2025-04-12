// import './style/chart.css'
import { Button } from "primereact/button";

export default function QuizzREsult({result,maxQa,duration,review}){
    return(
        <div className="w-[450px]" >
            <div className="flex flex-row gap-x-20" >
                <div  className="flex flex-col gap-y-2" >
                    <h2 className="font-bold" >{'You'}</h2>
                    <p> Points <span>{result}/{maxQa}</span> </p>
                    <p> Duration <span>{duration}</span> </p>
                </div> 
                <CircularChart value={(result/maxQa)*100} />
            </div>
            <div className="mx-auto items-center justify-center flex mt-5  ">
                <Button
                        style={{ width: "120px", height: "40px"}}
                        label="Review"
                        severity="success"
                        raised
                        onClick={review}
                />
            </div>
        </div>
    );
}

const CircularChart = ({ value }) => {
    const radius = 90; 
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (circumference * value) / 100; 

    return (
        <div className="chart-container" >
            <svg width="200" height="200">
                <circle cx="100" cy="100" r={radius} stroke="rgb(255, 48, 48)" strokeWidth="20" fill="none" />
                <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    stroke="rgb(0, 255, 115)"
                    strokeWidth="20"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }} 
                />
                <text x="50%" y="50%" textAnchor="middle" fill="rgb(0, 255, 115)    " dy=".3em" fontSize="48" >
                    {value}%
                </text>
            </svg>
        </div>
    );
};

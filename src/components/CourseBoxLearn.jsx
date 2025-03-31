import { ProgressBar } from 'primereact/progressbar';
import './style/course.css'
export default function CourseBoxLearn({ courseTitle, courseHook, progress }) {
    return (
        <div className="w-[280px] h-[240px] bg-white shadow-md rounded-sm flex flex-col hover:cursor-pointer">
            <div className="w-full h-[120px] bg-amber-400 rounded-t-lg"></div>
            <div className="px-4  flex flex-col flex-grow">
                <h2 className="text-lg font-semibold mt-1">{courseTitle}</h2>
                <p className="text-sm text-gray-600 mt-1">{courseHook}</p>
                <div className="card mt-auto">
                    <ProgressBar 
                        value={progress} 
                    />
                </div>
            </div>
        </div>
    );
}

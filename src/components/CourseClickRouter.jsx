import CourseClick from "./CourseClick";
import { useParams } from 'react-router-dom';
 
export default function CourseClickRouter({myCourse}){
    const { courseSelect } = useParams();
    const convertTitleToSlug = (title) => title.trim().replace(/\s+/g, '-');    
    const selectedcourse = myCourse.find(
      (item) => convertTitleToSlug(item.courseTitle) === courseSelect
    );
    
    return (
        <>
            <CourseClick  course={selectedcourse} />
        </>
    )
}
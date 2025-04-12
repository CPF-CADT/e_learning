import { useParams } from "react-router-dom";
import CourseDetail from "./CourseDetail";
import { courseDetail } from "../data/CourseDetailData";
import { useState } from "react";
export default function CourseDetailRoute({addTocart,buy,usrName,usrPro}){
    const { courseId } = useParams();
    const convertTitleToSlug = (title) => title.trim().replace(/\s+/g, '-');    
    const selectedcourse = courseDetail.find(
        (item) => convertTitleToSlug(item.courseTitle) === courseId
    );
    const [usrReview,setUsrReview] = useState(selectedcourse.feedbackList)
    return(<>
      <CourseDetail 
            addTocart={addTocart} 
            buy={buy} 
            cdes={selectedcourse.courseDescription} 
            ctitle={selectedcourse.courseTitle} 
            date={selectedcourse.lastUpdate}
            category={selectedcourse.category}
            dis={selectedcourse.discountPercent}
            numberOfStudent={selectedcourse.numberOfStudent}
            price={selectedcourse.price}
            rate={selectedcourse.star}
            teacher={selectedcourse.createdBy}
            cimg={selectedcourse.courseImage}
            feedBack={usrReview}
            setFeedback={setUsrReview}
            usrName={usrName}
            usrProfile={usrPro}
            />
    </>)
}
import { useParams } from 'react-router-dom';
import CourseView from './CourseView';
import { videoUrl } from '../data/videoData';

export default function CourseVideoRouter() {
  const { courseId } = useParams();
    const matched = videoUrl.find(v => v.code === `/video/${courseId}`);
    if (!matched) {
    return <div>Video not found</div>;
  }
  const { video } = matched;
  return <CourseView url={video} />;
}

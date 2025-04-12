import { useParams } from "react-router-dom";
import { quizzData } from "../data/quizzData";
import Quizz from "./Quizz";
export default function CourseQuizzRouter() {
  const { courseId } = useParams(); 
  console.log(courseId)
  const quiz = quizzData.find((q) => q.code === `/quizz/${courseId}`);  console.log(quiz)
  const quizContent = quiz.quizz;
  if (!quiz) {
    return <p>Quiz not found!</p>;
  }
  return <Quizz quizData={quizContent} />;
}

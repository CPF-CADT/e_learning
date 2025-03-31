import UserProfile from "./UserProfile";
import { ProgressBar } from "primereact/progressbar";
import "primeicons/primeicons.css";
import { useState } from 'react';
import { Button } from "primereact/button";
import "./style/course.css";
import { quizData } from "../data/quizz";
import QuizzResult from "./QuizzResult";

export default function Quizz({ usrname, usrProfilePath }) {
  const [showResult, setResult] = useState(false);
  const [review, setReview] = useState(false);
  const [quiNo, setQuiNo] = useState(1);
  const [totalCorrect, setTotalCorrect] = useState(0);
  
  const initialAnswers = Object.keys(quizData).reduce((acc, questionNo) => {
    acc[questionNo] = null;
    return acc;
  }, {});

  const [selectedAnswers, setSelectedAnswers] = useState(initialAnswers);
  const totalQuestions = Object.keys(quizData).length;

  function goLeft() {
    setQuiNo((n) => (n === 1 ? n : n - 1));
  }

  function goRight() {
    setQuiNo((n) => (n === totalQuestions ? n : n + 1));
  }

  function checkAns() {
    let allAnswered = true;
    let correctCount = 0;

    for (const questionNo of Object.keys(selectedAnswers)) {
      if (selectedAnswers[questionNo] === null) {
        alert(`Answer for Question ${questionNo} must be selected`);
        allAnswered = false;
        break;
      }
      if (selectedAnswers[questionNo] === quizData[questionNo].correctAnswer) {
        correctCount++;
      }
    }

    if (allAnswered) {
      setTotalCorrect(correctCount);
      setResult(true);
      setReview(true);
    }
  }

  function reviewResult() {
    setReview(false);
  }

  return (
    <div className="mx-auto container max-w-[1280px]">
      <div className="flex flex-row items-center justify-between">
        <span className="flex flex-row items-center hover:cursor-pointer">
          <i className="pi pi-chevron-left"></i> Back
        </span>
        <UserProfile
          UserName={usrname}
          ProfilePath={usrProfilePath}
          positionTop="50px"
        />
      </div>
      <div className="quizz-header flex flex-row justify-between mt-4 items-center">
        <div className="flex flex-col">
          <h2>Quizz Title</h2>
          <h4>Module Number</h4>
        </div>
        <div className="card mt-auto w-[22%]">
          <ProgressBar value={(quiNo / totalQuestions) * 100} />
        </div>
        <div>
          <button>Review</button>
          <button>Mark As Review</button>
        </div>
        <div>
          <i className="pi pi-clock"></i>
          <span>TIME (HH:MM:SS)</span>
        </div>
      </div>
      <div className="quizz-content w-[75%] mx-auto bg-gray-100 mt-10 px-5 py-2 rounded-2xl flex flex-col gap-y-3">
        {!review ? (
          <>
            <QuestionContent
              quizz_data={quizData[quiNo]}
              selectedAnswers={selectedAnswers}
              setSelectedAnswers={setSelectedAnswers}
              showResult={showResult}
              questionNo={quiNo}
            />
            <div className="mx-auto">
              {quiNo === totalQuestions && (
                <Button
                  style={{ width: "120px", height: "40px" }}
                  label={showResult ? "Review" : "Submit"}
                  severity="success"
                  raised
                  onClick={checkAns}
                />
              )}
            </div>
            <div className="ml-auto flex flex-row gap-x-5 mb-3">
              <Button
                style={{ width: "40px", height: "30px" }}
                icon="pi pi-chevron-left"
                rounded
                aria-label="Previous"
                onClick={goLeft}
              />
              <Button
                style={{ width: "40px", height: "30px" }}
                icon="pi pi-chevron-right"
                rounded
                aria-label="Next"
                onClick={goRight}
              />
            </div>
          </>
        ) : (
          <QuizzResult
            usrname={usrname}
            result={totalCorrect}
            maxQa={totalQuestions}
            duration={'30min'}
            review={reviewResult}
          />
        )}
      </div>
    </div>
  );
}

function Question({ questno, quest }) {
  return (
    <div>
      <h3 className="mb-3">Question {questno}</h3>
      <p>{quest}</p>
    </div>
  );
}

function Answer({ ansNo, answer, isSelected, onClick, selectAns, correctAnswer, showResult }) {
  return (
    <div
      className={`bg-white py-4 px-3 rounded-xl border-1 border-black flex flex-row items-center justify-between hover:cursor-pointer ${
        showResult && selectAns === ansNo
          ? selectAns === correctAnswer
            ? "correct-answer"
            : "wrong-answer"
          : ""
      }`}
      onClick={!showResult ? onClick : undefined}
      style={{ borderLeft: isSelected ? "8px solid #0388fc" : "" }}
    >
      <p>
        <span>{ansNo}</span> . {answer}
      </p>
      <i className="pi pi-circle rounded-full" style={{ fontSize: "1.2rem", backgroundColor: isSelected ? "#0388fc" : "" }}></i>
    </div>
  );
}

function QuestionContent({ quizz_data, selectedAnswers, setSelectedAnswers, showResult, questionNo }) {
  const selectAnswer = (ans) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionNo]: ans }));
  };
  return (
    <div className="quizz-content w-[75%] mx-auto bg-gray-100 mt-10 px-5 py-2 rounded-2xl flex flex-col gap-y-3">
      <Question questno={questionNo} quest={quizz_data.question} />
      {quizz_data.options &&
        Object.entries(quizz_data.options).map(([ansNo, answer]) => (
          <Answer
            key={ansNo}
            ansNo={ansNo}
            answer={answer}
            isSelected={selectedAnswers[questionNo] === ansNo}
            onClick={() => selectAnswer(ansNo)}
            selectAns={selectedAnswers[questionNo]}
            correctAnswer={quizz_data.correctAnswer}
            showResult={showResult}
          />
        ))}
    </div>
  );
}

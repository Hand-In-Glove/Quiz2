import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ScoreTracker from "../ScoreTracker/ScoreTracker";
import Cheddar from "./fetch";
import QuestionDisplay from "./QuestionDisplay";

function App() {
  const [score, setScore] = useState(0);
  const [curentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const data = [
    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question: "What is the capital of Peru?",
      correct_answer: "Lima",
      incorrect_answers: ["Santiago", "Montevideo", "Buenos Aires"]
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which of these is NOT an island that is part of the Philippines?",
      correct_answer: "Java",
      incorrect_answers: ["Luzon", "Mindanao", "Palawan"]
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "easy",
      question:
        "How many countries does the United States share a land border with?",
      correct_answer: "2",
      incorrect_answers: ["1", "3", "4"]
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question: "Which country has three capital cities?",
      correct_answer: "South Africa",
      incorrect_answers: ["Somalia", "China", "United Kingdom"]
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "hard",
      question: "When does Finland celebrate their independence day?",
      correct_answer: "December 6th",
      incorrect_answers: ["January 2nd", "November 12th", "February 8th"]
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "easy",
      question: "What is the name of New Zealand&#039;s indigenous people?",
      correct_answer: "Maori",
      incorrect_answers: ["Vikings", "Polynesians", "Samoans"]
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question: "Which of the following is NOT a capital city?",
      correct_answer: "Sydney",
      incorrect_answers: ["Cairo", "Moscow", "Beijing"]
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question: "How many countries share a land border with Luxembourg?",
      correct_answer: "3",
      incorrect_answers: ["4", "2", "5"]
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "hard",
      question:
        "The emblem on the flag of the Republic of Tajikistan features a sunrise over mountains below what symbol?",
      correct_answer: "Crown",
      incorrect_answers: ["Bird", "Sickle", "Tree"]
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question: "How many states are in Australia?",
      correct_answer: "6",
      incorrect_answers: ["7", "8", "5"]
    }
  ];

  return (
    <div className="App">
      <ScoreTracker score={score} curentQuestionNumber={curentQuestionNumber} />
      <header className="App-header">
        <img
          src="https://lh3.googleusercontent.com/proxy/NdpSMUhvJC8DPPdD0-17gAPCHwhbUSSA28xHPIoVu9wGrnpE5tEM2-wviu5JBTCda3htZv3y9O070M56QkrFGDVed-wn6_Eon9rSZxIKBqDrgqkSc65NgiYnZvCNMN4CzqfTBE4"
          className="App-logo"
          alt="logo"
        />
        <p>
          <Cheddar />
        </p>
       <QuestionDisplay questionsData={data} setScore={setScore} score={score} currentQuestionNumber={curentQuestionNumber} setCurrentQuestionNumber={setCurrentQuestionNumber}/>
      </header>
    </div>
  );
}

export default App;

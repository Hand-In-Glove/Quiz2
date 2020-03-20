import React, { useState } from "react";

const data = [
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "The board game &quot;Monopoly&quot; is a variation of what board game?",
    correct_answer: "The Landlord&#039;s Game",
    incorrect_answers: [
      "Territorial Dispute",
      "Property Feud",
      "The Monopolist&#039;s Game"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Typically, how many keys are on a piano?",
    correct_answer: "88",
    incorrect_answers: ["24", "12", "96"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these is NOT a city in India?",
    correct_answer: "Islamabad",
    incorrect_answers: ["Hyderabad", "Ahmedabad", "Ghaziabad"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question: "Which one of these action movies are shot entirely in one take?",
    correct_answer: "Victoria",
    incorrect_answers: [
      "Ip Man 2",
      "The Bourne Legacy",
      "L&eacute;on: The Professional"
    ]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question: "Who played the sun baby in the original run of Teletubbies?",
    correct_answer: "Jessica Smith",
    incorrect_answers: ["Pui Fan Lee", "Sue Monroe", "Lisa Brockwell"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the show &quot;Tengen Toppa Gurren Lagann&quot; what is the name of the character who force everyone to live underground?",
    correct_answer: "Lordgenome",
    incorrect_answers: ["Kingloname", "Lord Genome", "King Loname"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following Elite Four members from the 6th Generation of Pok&eacute;mon was a member of Team Flare?",
    correct_answer: "Malva",
    incorrect_answers: ["Siebold", "Wikstrom", "Drasna"]
  },
  {
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "easy",
    question: "In Pok&eacute;mon, Arbok evolves into Seviper.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "medium",
    question:
      "In the Season One Championship of &quot;League of Legends&quot;, the highest achievable rank was Diamond.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "easy",
    question:
      "In the &quot;S.T.A.L.K.E.R.&quot; series, the Freedom faction wishes to destroy the supernatural area known as  &quot;the Zone&quot;.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  }
];

function QuestionDisplay({ questionsData }) {
  //stateto hold current question - to be incremented when a question is completed
  const [currentNum, setCurrentNum] = useState(0);
  //data as useable object
  const dataObj = data.json();

  //array of answers to use
  const answersArr = [];
  answersArr.push(dataObj[currentNum]);
  //loop over incorect answers add them to answers array
  for (let i = 0; i < dataObj.incorrect_answers.length; i++) {
    answersArr.push(dataObj.incorrect_answers[i]);
  }

  //display a question and multiple answers

  //onclick check if answer is correct and display result (right or wrong)

  //increment score and current question
  return (
    <div>
      <h2 className={Questions}>{dataObj[currentNum].question}</h2>
      <div className={CSS.answersBox}>
        <p>{answer1}</p>
        <p>{answer2}</p>
        <p>{answer3}</p>
        <p>{answer4}</p>
      </div>
    </div>
  );
}

export default QuestionDisplay;

import React, {useState} from 'react'


function QuestionDisplay({questionsData, score, setScore, currentQuestionNumber, setCurrentQuestionNumber}){
    //stateto hold current question - to be incremented when a question is completed
    //data as useable object

    //array of answers to use
    const answersArr = []
    answersArr.push(questionsData[currentQuestionNumber].correct_answer)
    console.log(questionsData[currentQuestionNumber].incorrect_answers);
    //loop over incorect answers add them to answers array
    for (let i = 0; i< questionsData[currentQuestionNumber].incorrect_answers.length; i++){
        answersArr.push(questionsData[currentQuestionNumber].incorrect_answers[i]);
    }

    //display a question and multiple answers

    //onclick check if answer is correct and display result (right or wrong)
    function handleClick(e){
        e.target.innerText === questionsData[currentQuestionNumber].correct_answer && setScore(score+1) && setCurrentQuestionNumber(currentQuestionNumber+1);
    }

    //increment score and current question 
return <div>
<h2>{questionsData[currentQuestionNumber].question}</h2>
<div className={CSS.answersBox}>
    <p onClick={handleClick}>{answersArr[0]}</p>
    <p onClick={handleClick}>{answersArr[1]}</p>
    <p onClick={handleClick}>{answersArr[2]}</p>
    <p onClick={handleClick}>{answersArr[3]}</p>
</div>
</div>
}

export default QuestionDisplay;
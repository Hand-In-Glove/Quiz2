import React, {useState} from 'react'

function QuestionDisplay({questionsData}){
    //stateto hold current question - to be incremented when a question is completed

    //display a question and multiple answers

    //onclick check if answer is correct and display result (right or wrong)

    //increment score and current question 
return <div>
<h2>{question}</h2>
<div className={CSS.answersBox}>
<p>{answer1}</p>
    <p>{answer2}</p>
    <p>{answer3}</p>
    <p>{answer4}</p>
</div>
</div>
}

export default QuestionDisplay;
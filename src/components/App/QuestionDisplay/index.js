import React, {useState} from 'react'


function QuestionDisplay({questionsData}){
    //stateto hold current question - to be incremented when a question is completed
    const [currentNum, setCurrentNum] = useState(0);
    //data as useable object

    //array of answers to use
    const answersArr = []
    answersArr.push(questionsData[currentNum].correct_answer)
    console.log(questionsData[currentNum].incorrect_answers);
    //loop over incorect answers add them to answers array
    for (let i = 0; i< questionsData[currentNum].incorrect_answers.length; i++){
        answersArr.push(questionsData[currentNum].incorrect_answers[i]);
    }

    //display a question and multiple answers

    //onclick check if answer is correct and display result (right or wrong)

    //increment score and current question 
return <div>
<h2>{questionsData[currentNum].question}</h2>
<div className={CSS.answersBox}>
    <p>{answersArr[0]}</p>
    <p>{answersArr[1]}</p>
    <p>{answersArr[2]}</p>
    <p>{answersArr[3]}</p>
</div>
</div>
}

export default QuestionDisplay;
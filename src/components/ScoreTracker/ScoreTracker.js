import React from "react";
import css from "./Colors.module.css";
function ScoreTracker({ score, curentQuestionNumber }) {
  return (
    <div>
      <h2 className={css.Colors}>Score</h2>
      <h3 className={css.Board}> {`${score} : ${curentQuestionNumber}`} </h3>
    </div>
  );
}

export default ScoreTracker;

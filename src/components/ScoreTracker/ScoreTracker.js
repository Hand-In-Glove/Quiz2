import React from "react";

function ScoreTracker({ score, curentQuestionNumber }) {
  return (
    <div>
      <h2>Score</h2>
      {`${score} / ${curentQuestionNumber}`}
    </div>
  );
}

export default ScoreTracker;

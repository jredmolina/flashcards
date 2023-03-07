import "./card.css";
import { useState } from "react";
import { list } from "./questionsAndAnswers";

const Card = () => {
  const [question, setQuestion] = useState(list[0].question);
  const [answer, setAnswer] = useState(list[0].answer);
  const [difficulty, setDifficulty] = useState(list[0].difficulty);

  return (
    <div onClick={getQandA} className="card">
      <div className="front">{question}</div>
      <div className="back">{answer}</div>
    </div>
  );

  function getQandA() {
    let questionNum = Math.floor(Math.random() * 11);
    setQuestion(list[questionNum].question);
    setAnswer(list[questionNum].answer);
    setDifficulty(list[questionNum].difficulty);
  }
};

export default Card;

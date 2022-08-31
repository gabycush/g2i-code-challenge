import React, { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import he from "he";
import { fetchQuestions } from "../store/questions";
import { addResult } from "../store/results";

const QuizContainer = () => {
  const [qIndex, setQIndex] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const { questions, isLoading } = useSelector((state) => state.questions);

  const questionCount = isLoading ? 0 : questions.length;
  const currentQ = questions[qIndex - 1];
  const quizComplete = qIndex > questionCount;

  const answerQuestion = (value) => {
    const gradedQ = {
      question: he.decode(currentQ.question),
      answer: value,
      correct: value === currentQ.correct_answer,
    };

    dispatch(addResult(gradedQ));
    setQIndex(qIndex + 1);
  };

  return (
    <Container maxWidth="sm">
      <Box className="box-sm category">
        <h3>{isLoading ? "" : currentQ?.category}</h3>
      </Box>

      <Box className="box-md">
        {!quizComplete && (
          <p className="question">
            {isLoading ? "" : he.decode(currentQ.question)}
          </p>
        )}
      </Box>
      <Box className="box-sm sub">
        <p>
          {qIndex} of {questionCount}
        </p>
      </Box>
      <Box className="box-sm button">
        <Box display="flex">
          <Button variant="contained" onClick={() => answerQuestion("True")}>
            {qIndex >= questionCount ? <Link to="/results">True</Link> : "True"}
          </Button>
          <Button variant="contained" onClick={() => answerQuestion("False")}>
            {qIndex >= questionCount ? (
              <Link to="/results">False</Link>
            ) : (
              "False"
            )}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default QuizContainer;

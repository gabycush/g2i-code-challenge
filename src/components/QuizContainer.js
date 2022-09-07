import React, { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import he from "he";
import { fetchQuestions } from "../store/questions";
import { addResult } from "../store/results";

const QuizContainer = () => {
  const [questionIndex, setQuestionIndex] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const { questions, isLoading, error } = useSelector(
    (state) => state.questions
  );

  const questionCount = isLoading || error ? 0 : questions.length;
  const current = questions[questionIndex - 1];

  const answerQuestion = (value) => {
    const graded = {
      question: current.question ? he.decode(current.question) : "",
      correct: value === current.correct_answer,
    };

    dispatch(addResult(graded));
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <Container maxWidth="sm">
      <Box className="box-sm category">
        {error ? (
          <h3> Oh No! </h3>
        ) : (
          <h3>{isLoading ? "" : current?.category}</h3>
        )}
      </Box>

      <Box className="box-md">
        {error ? (
          <p className="question">{error}</p>
        ) : (
          <p className="question">
            {!isLoading && current?.question
              ? he.decode(current?.question)
              : ""}
          </p>
        )}
      </Box>
      <Box className="box-sm sub">
        <p>
          {questionIndex} of {questionCount}
        </p>
      </Box>
      <Box className="box-sm button">
        {error ? (
          <Box>
            <Link to="/">Return to Title Screen</Link>
          </Box>
        ) : (
          <Box display="flex">
            <Button variant="contained" onClick={() => answerQuestion("True")}>
              {questionIndex >= questionCount ? (
                <Link to="/results">True</Link>
              ) : (
                "True"
              )}
            </Button>
            <Button variant="contained" onClick={() => answerQuestion("False")}>
              {questionIndex >= questionCount ? (
                <Link to="/results">False</Link>
              ) : (
                "False"
              )}
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default QuizContainer;

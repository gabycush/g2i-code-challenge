import React from "react";
import { Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Quiz.css";

const QuizContainer = () => {
  return (
    <Container maxWidth="sm">
      <Box className="box-sm title">
        <h3>Welcome to the Trivia Challenge!</h3>
      </Box>
      <Box className="box-sm main">
        <p>You will be presented with 10 true or false questions.</p>
        <p className="">Can you score 100%?</p>
      </Box>
      <Box className="box-sm button">
        <Link to="/quiz">BEGIN</Link>
      </Box>
    </Container>
  );
};

export default QuizContainer;

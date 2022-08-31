import React from "react";
import { Container, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const QuizContainer = () => {
  return (
    <Container maxWidth="sm">
      <Box>
        <h3>Welcome to the Trivia Challenge</h3>
      </Box>
      <Box>
        <p>You will be presented with 10 true or false questions.</p>

        <p>Can you score 100%?</p>
      </Box>
      <Box>
        <Button>
          <Link to="/quiz">BEGIN</Link>
        </Button>
      </Box>
    </Container>
  );
};

export default QuizContainer;

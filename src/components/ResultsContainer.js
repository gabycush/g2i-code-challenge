import React from "react";
import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetResults } from "../store/results";

const ResultsContainer = () => {
  const { results } = useSelector((state) => state.results);
  const dispatch = useDispatch();

  const calculateScore = (results) => {
    let finalScore = 0;
    results.forEach((q) => {
      if (q.correct) {
        finalScore++;
      }
    });
    return finalScore;
  };

  const onResetQuiz = () => {
    dispatch(resetResults());
  };
  return (
    <Container>
      <Box>
        <h3>
          You Scored {calculateScore(results)}/{results.length}
        </h3>
      </Box>
      <Box>
        {results.map((q) => {
          return (
            <Box display="flex">
              <span>{q.correct ? <Add /> : <Remove />}</span>
              <span>{q.question}</span>
            </Box>
          );
        })}
      </Box>
      <Box>
        <Button onClick={onResetQuiz}>
          <Link to="/">PLAY AGAIN?</Link>
        </Button>
      </Box>
    </Container>
  );
};

export default ResultsContainer;

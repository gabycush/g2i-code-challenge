import React from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
// import Add from "@mui/icons-material/Add";
// import Remove from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { resetResults } from "../store/results";

const ResultsContainer = () => {
  // const { results } = useSelector((state) => state.results);
  // const dispatch = useDispatch();

  // const calculateScore = (results) => {
  //   let finalScore = 0;
  //   results.forEach((q) => {
  //     if (q.correct) {
  //       finalScore++;
  //     }
  //   });
  //   return finalScore;
  // };

  // const onResetQuiz = () => {
  //   dispatch(resetResults());
  // };
  return (
    <Container maxWidth="sm">
      <Box className="box-sm title">
        <h3>These are the prices</h3>
      </Box>
      <Box className="box-sm button">
        <Link to="/">Go Home?</Link>
      </Box>
    </Container>
  );
};

export default ResultsContainer;

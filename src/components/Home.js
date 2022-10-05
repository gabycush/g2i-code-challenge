import React from "react";
import { Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Quiz.css";

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box className="box-sm title">
        <h3>This is the Sweeet Home Page</h3>
      </Box>
      <Box className="box-sm main">
        <p>You like?</p>
      </Box>
      <Box className="box-sm button">
        <Link to="/quiz">Go to dashboard page {`(for now)`}</Link>
      </Box>
    </Container>
  );
};

export default Home;

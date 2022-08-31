import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import QuizContainer from "./components/QuizContainer";
import QuizWelcome from "./components/QuizWelcome";
import ResultsContainer from "./components/ResultsContainer";
import "./App.css";
import { Box } from "@mui/system";

function App() {
  const { results, isLoading } = useSelector((state) => state.results);
  return (
    <Router>
      <Box
        sx={{
          bgcolor: "lightGrey",
        }}
        className="App"
      >
        <Container
          className="trivia-container"
          maxWidth="sm"
          sx={{
            margin: "5% auto",
          }}
        >
          <Routes>
            <Route path="/quiz" element={<QuizContainer />} />
            <Route
              path="/results"
              element={<ResultsContainer results={isLoading ? results : []} />}
            />
            <Route path="/" element={<QuizWelcome />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;

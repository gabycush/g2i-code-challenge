import { Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import QuizContainer from "./components/QuizContainer";
import QuizWelcome from "./components/QuizWelcome";
import ResultsContainer from "./components/ResultsContainer";
import "./App.css";

function App() {
  const { results, isLoading } = useSelector((state) => state.results);

  const mobile = useMediaQuery("(max-width:625px)");

  return (
    <Router>
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "lightgrey",
          margin: mobile ? "-20px 0 0 0" : "5% auto",
          padding: "16px 16px 32px",
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
    </Router>
  );
}

export default App;

import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import SubscriptionContainer from "./components/Subscription/SubscriptionContainer";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
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
            <Route path="/quiz" element={<Dashboard />} />
            <Route
              path="/results"
              element={<Pricing results={isLoading ? results : []} />}
            />
            <Route path="/stripe" element={<SubscriptionContainer />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;

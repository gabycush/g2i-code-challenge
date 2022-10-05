import React from "react";
import { Container, Box, Button } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import he from "he";
// import { fetchQuestions } from "../store/questions";
// import { addResult } from "../store/results";

const Dashboard = () => {
  // const [questionIndex, setQuestionIndex] = useState(1);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchQuestions());
  // }, [dispatch]);

  // const { questions, isLoading, error } = useSelector(
  //   (state) => state.questions
  // );

  // const questionCount = isLoading || error ? 0 : questions.length;
  // const current = questions[questionIndex - 1];

  // const answerQuestion = (value) => {
  //   const graded = {
  //     question: current.question ? he.decode(current.question) : "",
  //     correct: value === current.correct_answer,
  //   };

  //   dispatch(addResult(graded));
  //   setQuestionIndex(questionIndex + 1);
  // };

  return (
    <Container maxWidth="sm">
      <Box className="box-sm category">
        <h3>Dashboard, yo.</h3>
      </Box>

      <Box display="flex">
        <Button variant="contained">
          <Link to="/results">Go to the pricing page yep</Link>
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;

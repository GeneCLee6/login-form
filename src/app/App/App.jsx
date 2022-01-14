import React from "react";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f0f1f3;
`;

const Box = styled.div`
  width: 400px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 12px 40px rgb(0 0 0 / 15%);
  padding: 40px;
`;

const App = function App() {
  return (
    <Container>
      <Box>
        <SignUpForm></SignUpForm>
      </Box>
    </Container>
  );
};

export default App;

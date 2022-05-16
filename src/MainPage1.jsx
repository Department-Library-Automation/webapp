import "./App.css";
import styled from "styled-components";
import { AccountBox1 } from "./components/accountBox1";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function MainPage1() {
  return (
    <AppContainer>
      <AccountBox1 />
    </AppContainer>
  );
}

export default MainPage1;

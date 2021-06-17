import React from "react";
import styled from "styled-components";

import Canvas from "./Canvas";
import List from "./List";

const App = () => {
  return (
    <Appwrapper>
      <Canvas />
      <List />
    </Appwrapper>
  );
};

const Appwrapper = styled.div`
  width: 100vw;
  height: 100vh;

  @media only screen and (max-width: 600px){
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 600px)  {
    display: flex;
    justify-content: space-between;
  }
`;

export default App;

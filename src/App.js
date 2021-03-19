import React from "react";
import Main from "./components/Main";
import { Title } from "./utils/style";

function App() {
  return (
    <>
      <Title size="large">
        Get informations about current weather and forecast
      </Title>
      <Main />
    </>
  );
}

export default App;

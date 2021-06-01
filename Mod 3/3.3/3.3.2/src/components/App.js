import React from "react";
//import "../stylesheet/App.css";
import HalfPage from "./HalfPage";
import HalfPage2 from "./HalfPage2";

class App extends React.Component {
  render() {
    return (
      <div>
        <HalfPage title="Soy el título de la izquierda">
          <p> Estoy en la izquierda</p>
        </HalfPage>
        <HalfPage2 title="Soy el título de la derecha">
          <p> Estoy en la derecha</p>
        </HalfPage2>
      </div>
    );
  }
}

export default App;

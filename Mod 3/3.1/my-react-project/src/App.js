import React from "react";
import foto from "./Laura.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} className="App-foto" alt="foto" />
        <div className="App-header-title">
          <h1 className="App-header-maintitle">Laura Graizer </h1>
          <h3 className="App-header-subtitle">Lunes 31 de mayo de 2021</h3>
        </div>
      </header>
      <main className="App-main">
        <p className="App-main-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </main>
      <footer className="App-footer">
        <p className="App-footer-paragraph">Leer más...</p>
        <i class="fas fa-heartbeat"></i>
      </footer>
    </div>
  );
}

export default App;

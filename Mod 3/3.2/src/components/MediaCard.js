import React from "react";

const MediaCard = () => {
  <div className="MediaCard">
    <header className="App-header">
      <img src={this.props.photo} className="App-foto" alt="foto" />
      <div className="App-header-title">
        <h1 className="App-header-maintitle"> </h1>
        <h3 className="App-header-subtitle">{this.props.date}</h3>
      </div>
    </header>
    <main className="App-main">
      <p className="App-main-paragraph">{this.props.text}</p>
    </main>
    <footer className="App-footer">
      <p className="App-footer-paragraph">Leer más...</p>
      <p>{this.props.likes}</p>
      <i class={this.props.heart}></i>
    </footer>
  </div>;
};

export default MediaCard;

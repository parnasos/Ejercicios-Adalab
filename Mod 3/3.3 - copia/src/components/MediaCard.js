import React from "react";
import "../components/App.js";
//import "../stylesheet/App.css";
//versión componente de tipo clase Ej.2
/*class MediaCard extends React.Component {
  render () {
    cosole.log(this.props)
    return (
  <div className="MediaCard">
    <header className="App-header">
      <img src={this.props.photo} className="App-foto" alt="foto" />
      <div className="App-header-title">
        <h1 className="App-header-maintitle">{this.props.name} </h1>
        <h3 className="App-header-subtitle">{this.props.date}</h3>
      </div>
    </header>
    <main className="App-main">
      <p className="App-main-paragraph">{this.props.text}</p>
    </main>
    <footer className="App-footer">
      <p className="App-footer-paragraph">Leer más...</p>
      <p>{this.props.likes}</p>
      <i className={this.props.heart}></i>
    </footer>
  </div>;)}
};*/

//versión componentes funcionales ej. 3
const MediaCard = (props) => {
  console.log(props);
  const completeName = props.name;
  const photoProfile = props.photo;
  const date = props.date;
  const textBio = props.text;
  const numberLikes = props.likes;
  const heart = props.heart;
  return (
    <div className="MediaCard">
      <header className="App-header">
        <img src={photoProfile} className="App-foto" alt="foto" />
        <div className="App-header-title">
          <h1 className="App-header-maintitle">{completeName} </h1>
          <h3 className="App-header-subtitle">{date}</h3>
        </div>
      </header>
      <main className="App-main">
        <p className="App-main-paragraph">{textBio}</p>
      </main>
      <footer className="App-footer">
        <p className="App-footer-paragraph">Leer más...</p>
        <p>{numberLikes}</p>
        <i className={heart}></i>
      </footer>
    </div>
  );
};

export default MediaCard;

import React from "react";
import getDataFromAPI from "../services/getDataFromAPI";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
      filterCity: "",
      filterGender: "",
    };
    getDataFromAPI().then((data) => {
      console.log(data);
      this.setState({
        profiles: data,
      });
    });

    this.handleFilterCity = this.handleFilterCity.bind(this);
    this.handleFilterGender = this.handleFilterGender.bind(this);
  }
  handleFilterCity(ev) {
    this.setState({
      filterCity: ev.target.value,
    });
  }

  handleFilterGender(ev) {
    this.setState({
      filterGender: ev.target.value,
    });
  }

  renderProfiles() {
    return this.state.profiles
      .filter((profile) => {
        return profile.city
          .toLowerCase()
          .includes(this.state.filterCity.toLowerCase());
      })
      .filter((profile) => {
        return profile.gender
          .toLowerCase()
          .includes(this.state.filterGender.toLowerCase());
      })
      .map((profile) => {
        return (
          <li key={profile.id}>
            <h3>Name:{profile.name}</h3>
            <p>City:{profile.city}</p>
            <p>Age:{profile.age}</p>
            <p>Gender:{profile.gender}</p>
            <img src={profile.image}></img>
          </li>
        );
      });
  }

  render() {
    return (
      <div>
        <p>Random Profiles</p>
        <input
          type="text"
          placeholder="Search according to the city"
          onChange={this.handleFilterCity}
        />
        <input
          type="text"
          placeholder="Search according to the gender"
          onChange={this.handleFilterGender}
        />
        <ul>{this.renderProfiles()}</ul>
      </div>
    );
  }
}

export default App;

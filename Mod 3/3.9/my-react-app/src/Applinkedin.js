import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import PersonDetail from "./components/PersonDetail";
import getDataFromAPI from "./services/getDataFromAPI";

class Applinkedin extends React.Component {
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
    this.renderProfile = this.renderProfile.bind(this);
    this.renderProfiles = this.renderProfiles.bind(this);
  }

  renderProfile() {
    (routerProps) => {
      const profileIdRouter = this.routerProps.match.param.profile.id;
      const profileFound = this.profiles.find(
        (profile) => profile.id === profileIdRouter
      );
      if (profileFound) {
        return <PersonDetail profile={profileFound} />;
      } else {
        return <PersonDetail />;
      }
    };
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
            <Link to={`./personDetail/${profile.id}`}>
              <h3>Name:{profile.name}</h3>
              <p>City:{profile.city}</p>
              <p>Age:{profile.age}</p>
              <p>Gender:{profile.gender}</p>
              <img src={profile.image}></img>
            </Link>
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
        <Switch>
          <Route
            path="/personDetail/:id"
            // render={(routerProps) => (
            //   <PersonDetail
            //     match={routerProps.match}
            //     data={this.state.profiles}
            //   />
            // )}
            render={this.renderProfile()}
          />
        </Switch>
      </div>
    );
  }
}

export default Applinkedin;

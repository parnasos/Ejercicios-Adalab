import React from "react";
import ProfilesList from "./ProfilesList";
import { fetchRandom } from "./fetchRandom.js";

//const dataRandom = "https://randomuser.me/api/?results=50";
class RandomUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RandomProfiles: [],
    };
    this.fetchNewProfiles = this.fetchNewProfiles.bind(this);
  }
  fetchNewProfiles() {
    fetchRandom().then((data) => {
      console.log(data);
      this.setState({
        RandomProfiles: data,
      });
    });
  }

  render() {
    const { RandomProfiles } = this.state;
    return (
      <section>
        <ProfilesList profiles={RandomProfiles} />
      </section>
    );
  }
}

export default RandomUser;

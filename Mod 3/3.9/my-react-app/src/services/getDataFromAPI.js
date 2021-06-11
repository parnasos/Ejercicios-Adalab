const dataRandom = "https://randomuser.me/api/?results=25";

const getDataFromAPI = () => {
  return fetch(dataRandom)
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((profile) => {
        return {
          id: profile.login.uuid,
          age: profile.dob.age,
          username: profile.login.username,
          city: profile.location.city,
          country: profile.location.country,
          name: profile.name.first + " " + profile.name.last,
          email: profile.email,
          gender: profile.gender,
          image: profile.picture.large,
        };
      });
    });
};

export default getDataFromAPI;

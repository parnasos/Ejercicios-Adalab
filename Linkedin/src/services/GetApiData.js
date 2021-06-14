import React from "react";

const urlFetch = "https://randomuser.me/api/?results=10";

const GetApiData = () => {
  return fetch(urlFetch)
    .then((response) => response.json())
    .then((data) => {
      const CleanData = data.results.map((user) => {
        return {
          id: user.login.uuid,
          age: user.dob.age,
          city: user.location.city,
          country: user.location.city,
          name: user.name.first + " " + user.name.last,
          email: user.email,
          gender: user.gender,
          image: user.picture.large,
        };
      });
      return CleanData;
    });
};

export default GetApiData;

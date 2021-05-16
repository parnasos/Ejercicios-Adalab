"use strict";
const btn = document.querySelector(".js-btn");
const org = document.querySelector(".js-txt");

function getProfile() {
  fetch(`https://api.github.com/orgs/${org.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const reposOrg = data.repos_url;
      document.body.innerHTML += `<p>Repositorios de ${org.value}: </p><ul></ul>`;
      return fetch(`https://api.github.com/orgs/${org.value}/repos`)
        .then((reposResponse) => reposResponse.json())
        .then((reposData) => {
          for (const repo of reposData) {
            console.log(repo);
            document.body.innerHTML += `<li>${repo.name}</li>`;
          }
        });

      /* 
      reposData[repo].repos_url
      const reposOrg = dataOrg.message;
      return fetch(`https://api.github.com/orgs/${org.value}`)(
        (document.body.innerHTML += `<p>Name: </p>${data.name}`)
      );
      document.body.innerHTML += `<p>Respositorios: </p>${data.public_repos}`;

      document.body.innerHTML += `<p>Imagen avatar: </p><img>${data.avatar}`;

      /*img.src = `https://api.github.com/users/${text.value}`;
      img.alt = "avatar del perfil";*/
    });
}

btn.addEventListener("click", getProfile);

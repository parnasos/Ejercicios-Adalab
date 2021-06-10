const dataRandom = "https://randomuser.me/api/?results=50";

const fetchRandom = () => {
  return fetch(dataRandom).then((response) => response.json()); // Devuelve la Promise que genera el fetch
};

export { fetchRandom };

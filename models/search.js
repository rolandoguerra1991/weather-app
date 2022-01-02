const axios = require("axios");

class Search {
  history = [];

  constructor() {}

  async searchCity(place = "") {
    const url = ``;
    const resp = await axios.get(url);
  }
}

module.exports = Search;

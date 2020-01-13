const axios = require("axios");

class Github {
  constructor() {
    this.clientId = "56707e8d2d84e9a80369";
    this.clientSecret = "7664179be0d39dcf0a6f0ee0da3d3a11a2de1aff";
    this.numberOfRepos = 6;
    this.sort = "created: asc";
  }
  // https://api.github.com/users/skroderi?client_id=56707e8d2d84e9a80369&client_secret=7664179be0d39dcf0a6f0ee0da3d3a11a2de1aff
  async getProfileData(user) {
    try {
      const profileResponse = await axios.get(
        `https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
      );

      return profileResponse.data;
    } catch (error) {
      console.log(error);
    }
  }
  // `https://api.github.com/users/skroderi/repos?per_page=6&sort=created: asc&client_id=56707e8d2d84e9a80369&client_secret=7664179be0d39dcf0a6f0ee0da3d3a11a2de1aff`
  async getProfileRepos(user) {
    try {
      const profileReposResponse = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=${this.numberOfRepos}&sort=${this.sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
      );
      return profileReposResponse.data;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Github;

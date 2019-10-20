export class Github {
  constructor() {
    this.clientId = "56707e8d2d84e9a80369";
    this.clientSecret = "7664179be0d39dcf0a6f0ee0da3d3a11a2de1aff";
    this.numberOfRepos = 6;
    this.sort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.numberOfRepos}&sort=${this.sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );

    const profileData = await profileResponse.json();
    const profileRepos = await reposResponse.json();
    return { profileData, profileRepos };
  }
}

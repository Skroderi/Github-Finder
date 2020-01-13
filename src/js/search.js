// import Github from "./github";
import { Ui } from "./ui";
const Github = require("./github").default;
// const Github = require("./Github");

export class SearchUser {
  constructor() {
    this.github = new Github();
    this.ui = new Ui();
    this.searchInput = document.querySelector(".search__input");
    this.searchInput.addEventListener("keyup", () => this.startSearch());
  }

  async startSearch() {
    let profile = this.searchInput.value;
    if (profile != "") {
      const profileData = await this.github.getProfileData(user);
      const profileRepos = await this.github.getProfileRepos(user);
      if (!profileData) {
        this.ui.showAlert("Profile not found :(", "alert alert--danger");
        this.ui.resultWrapper.innerHTML = "";
      } else {
        this.ui.clearAlert();
        this.ui.showUser(profileData);
        this.ui.showRepos(profileRepos);
      }
    } else {
      this.ui.resultWrapper.innerHTML = "";
    }
  }
}

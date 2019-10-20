import { Github } from "./github";
import { Ui } from "./ui";

export class SearchUser {
  constructor() {
    this.github = new Github();
    this.ui = new Ui();
    this.searchInput = document.querySelector(".search__input");
    this.searchInput.addEventListener("keyup", () => this.startSearch());
  }

  async startSearch() {
    let user = this.searchInput.value;
    if (user != "") {
      const userData = await this.github.getUser(user);
      if (userData.profileData.message === "Not Found") {
        this.ui.showAlert("Profile not found :(", "alert alert--danger");
        this.ui.resultWrapper.innerHTML = "";
      } else {
        this.ui.clearAlert();
        this.ui.showUser(userData.profileData);
        this.ui.showRepos(userData.profileRepos);
      }
    } else {
      this.ui.resultWrapper.innerHTML = "";
    }
  }
}

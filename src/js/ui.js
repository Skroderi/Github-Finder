export class Ui {
  constructor() {
    this.userAvatar = document.querySelector(".user__avatar-img");
    this.resultWrapper = document.querySelector(".result-wrapper");
  }

  showUser(userData) {
    const data = userData.created_at.split("T")[0];

    this.resultWrapper.innerHTML = `<div class="user">
    <div class="user__avatar">
      <img src="${
        userData.avatar_url
      }" alt="user avatar" class="user__avatar-img" />
      <div class="user__avatar-btn">
        <a href="${userData.html_url}" class="user__avatar-link">
          View Profile
        </a>
      </div>
    </div>
    <div class="user__container">
      <div class="user__stats">
        <div class="user__stat">Public repos: ${userData.public_repos}</div>
        <div class="user__stat">Public gists: ${userData.public_gists}</div>
        <div class="user__stat">Followers: ${userData.followers}</div>
        <div class="user__stat">Following: ${userData.following}</div>
    
      </div>
      <div class="user__info">
        <ul class="user__info-list">
          <li class="user__info-item">Login: ${userData.login}</li>
          <li class="user__info-item">Location: ${
            userData.location === null ? "none" : userData.location
          }</li>
          <li class="user__info-item">Member Since: ${data}</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="repos">
  <h1 class="repos__header">Latest Repos</h1>
  <ul class="repos__list"> </ul>
</div>
  `;
  }

  showRepos(repos) {
    const reposList = document.querySelector(".repos__list");
    repos.forEach(repo => {
      reposList.innerHTML += `    
<li class="repos__item">
<a  href="${repo.html_url}" class="repos__item-name">${repo.name}</a>
<div class="repos__stats">
<div class="repos__stat">Stars: ${repo.stargazers_count}</div>
  <div class="repos__stat">Watchers: ${repo.watchers}</div>
  <div class="repos__stat">Forks: ${repo.forks_count}</div>
</div>
</li>`;
    });
  }

  showAlert(message, type) {
    this.clearAlert();
    const alert = document.createElement("div");
    const container = document.querySelector(".search__container");
    const search = document.querySelector(".search");
    alert.className = type;
    alert.textContent = message;
    container.insertBefore(alert, search);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}

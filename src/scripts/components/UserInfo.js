export default class UserInfo {
  constructor() {
    this._profileName = document.querySelector(".profile__name");
    this._profileDescription = document.querySelector(".profile__description");
  }

  setUserInfo( { name, description } ) {
    this._profileName.textContent = name;
    this._profileDescription.textContent = description;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      description: this._profileDescription.textContent
    }
  }
}

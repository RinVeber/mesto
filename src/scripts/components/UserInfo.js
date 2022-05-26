export default class UserInfo {
  constructor(profileNameSelector, profileDescriptionSelector, profileAvatarSelector) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileDescription = document.querySelector(profileDescriptionSelector);
    this._profileAvatar = document.querySelector(profileAvatarSelector);
  }

  setUserInfo( { name, about, avatar } ) {
    this._profileName.textContent = name;
    this._profileDescription.textContent = about;
    this._profileAvatar.src = avatar;
    this._profileAvatar.alt = name;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileDescription.textContent
    }
  }
}

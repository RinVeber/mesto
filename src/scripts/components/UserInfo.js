import { profileName, profileDescription } from "../utils/constants.js";

export default class UserInfo {
  constructor(formValues) {
    this._formValues = formValues;
    this.profileName = document.querySelector(".profile__name");
    this.profileDescription = document.querySelector(".profile__description");
  }

  setUserInfo() {
    profileName.textContent = this._formValues.name;
    profileDescription.textContent = this._formValues.description;
  }

  getUserInfo() {
    this._formValues.name = profileName.textContent;
    this._formValues.description = profileDescription.textContent;
    return this._formValues;
  }
}

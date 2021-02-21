import http from "./base";

class AuthAPI {
  #loginEndpoint = "/login";
  #logoutEndpoint = "/logout";

  login({ username, password }) {
    return new Promise((resolve, reject) => {
      http
        .post(this.#loginEndpoint, { username, password })
        .then((response) => resolve(response?.data))
        .catch((error) => {
          reject(error?.response?.data?.message ?? error.message);
        });
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      http
        .post(this.#logoutEndpoint)
        .then((response) => resolve(response?.data))
        .catch((error) =>
          reject(error?.response?.data?.message?.toUpperCase() ?? error.message)
        );
    });
  }
}

export default new AuthAPI();

import http from "./base";

class AuthAPI {
  #loginEndpoint = "/login";
  #logoutEndpoint = "/logout";

  login({ username, password }) {
    return new Promise((resolve, reject) => {
      http
        .post(this.#loginEndpoint, { username, password })
        .then((response) => {
          const {
            data: {
              data: { token },
            },
          } = response;
          window.localStorage.setItem("Token", token);
          resolve(response?.data?.data);
        })
        .catch((error) => {
          window.localStorage.removeItem("Token");
          reject(error?.response?.data?.message ?? error.message);
        });
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      http
        .post(this.#logoutEndpoint, undefined, {
          headers: { token: window.localStorage.getItem("Token") ?? null },
        })
        .then((response) => {
          window.localStorage.removeItem("Token");
          resolve(response?.data?.data?.toUpperCase());
        })
        .catch((error) =>
          reject(error?.response?.data?.message ?? error.message)
        );
    });
  }
}

export default new AuthAPI();

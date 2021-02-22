import http from "./base";

class DataApI {
  #endpoint = "/dashboard";

  getData() {
    return new Promise((resolve, reject) => {
      http
        .get(this.#endpoint, {
          headers: { token: window.localStorage.getItem("Token") ?? null },
        })
        .then((response) => {
          resolve(response?.data?.data);
        })
        .catch((error) => {
          reject(error?.response?.data?.message ?? error.message);
        });
    });
  }
}

export default new DataApI();

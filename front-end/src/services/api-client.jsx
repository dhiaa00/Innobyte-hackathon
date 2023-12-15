import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/dashboard",
  headers: {
    //Authorization: localStorage.getItem("access_token")
    //  ? "Token " + localStorage.getItem("access_token")?.toString()
    //  : null,
  },
});

class APIClient {
  endpoint = "";
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll = (config) => {
    return axiosInstance
      .get(this.endpoint, config)
      .then((response) => response.data);
  };

  post = (config) => {
    return axiosInstance
      .post(this.endpoint + "", config)
      .then((res) => res.data);
  };
}

export default APIClient;

import axios from "axios";
let baseURL = "http://localhost:3000/";

const Axios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;

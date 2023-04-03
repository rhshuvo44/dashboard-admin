import axios from "axios";

const BackendApiUrl = axios.create({
  baseURL: "https://some-domain.com/api/",
  headers: {
    "content-type": "application/json",
    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export default BackendApiUrl;

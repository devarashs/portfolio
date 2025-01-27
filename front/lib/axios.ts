import axios from "axios";

const api = process.env.NEXT_PUBLIC_API || "https://api.devarash.icu";
axios.defaults.baseURL = api;
export default axios;

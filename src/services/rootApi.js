import axios from "axios";

const rootApi = axios.create({
  baseURL: "https://images-api.nasa.gov",
});

export const apiKey = 'ZZbGdteGru0mdDYv5heoLtidkJzsEnX37F0BhkPN'

export default rootApi;

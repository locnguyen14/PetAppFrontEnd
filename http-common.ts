import axios from "axios";
import {REACT_APP_API_URL} from "@env";

console.log("Inside dotenv file: ", REACT_APP_API_URL)

export default axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json"
  }
});
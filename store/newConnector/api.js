import axios from "axios"
import { NEW_CONNECTOR_99_TOKEN } from "react-native-dotenv"
const newConnector = axios.create({
  baseURL: "https://app.crowdbotics.com/dashboard/app/20130/storyboard/99273/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${NEW_CONNECTOR_99_TOKEN}`
  }
})
export const apiService = {}

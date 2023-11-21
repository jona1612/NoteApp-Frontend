import axios from "axios"

export default axios.create({
    // baseURL:"http://localhost:5000"
    baseURL: "https://note-app-backend-bice.vercel.app/"
});
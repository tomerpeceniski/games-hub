import axios from 'axios';
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a8a59234f5fc45118ba0da2c79ed5d72"
    }
})
import axios from "axios";

export const todoApi = {
    getData: async (data: {
        userName: string;
        password: string;
    }) => {
        return await axios.post("http://127.0.0.1:3000/api/v1/task", data)
    }
}
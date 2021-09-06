import axios from "axios";

export default class PostService {
    static async getAll() {
            const response = await axios.get('https://jsonpladaceholder.typicode.com/podasts')
            return response.data;
        
    }
}
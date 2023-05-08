import axios from "axios";

const baseUrl = `http://localhost:8000/api`

const axiosInstance = axios.create({baseUrl});

/**
 * Creates new user
 * @param {} param0 
 */
export const signup = async ({firstname, lastname, password, email}) => {
    const userData = {first_name: firstname, last_name: lastname, email, password};
    await axiosInstance.post("/signup/", userData);
}
import axios from "axios";

// =============== (AXIOS) SETTINGS =============
const instance = axios.create({
    baseURL: "http://localhost:9090",
});



// REGISTER
export const GetAllProduct = () => {
    return instance.get(`/product/getAll`);
};


import axios from "axios";

// =============== (AXIOS) SETTINGS =============
const instance = axios.create({
    baseURL: "http://localhost:9090",
});



// REGISTER
export const GetAllProduct = () => {
    return instance.get(`/product/getAll`);
};
// GetSingleProduct
export const getSingleProduct = (_id) => {
    return instance.get(`/product/${_id}`).then(response => response.data);
};

// Create Order
export const orderCreate = (_id , phone , username) => {
    return instance.post(`/order/create/${_id}` , {phone , username})
}
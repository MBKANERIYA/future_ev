import axios from "axios";

const { BASE_URL, GET_PRODUCT } = require("../constant")

let get_product = async (action) => {
    console.log(action, "get api");

    let { data, status } = await axios.get(BASE_URL + GET_PRODUCT)
    console.log(data);
    return { data, status }
}

export { get_product }
const { takeLatest } = require("redux-saga/effects");
const { PRODUCT_GET_PENDING } = require("../main/action");
const { handle_get_product } = require("./manage");

function* handle_get_product_saga() {
    yield takeLatest(PRODUCT_GET_PENDING, handle_get_product)
}

export { handle_get_product_saga }           
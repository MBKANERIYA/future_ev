import { all } from "redux-saga/effects";

const { handle_get_product_saga } = require("./saga");

function* rootSaga() {
    yield all([
        handle_get_product_saga()
    ])
}

export default rootSaga


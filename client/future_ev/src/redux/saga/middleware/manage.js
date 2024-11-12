import { call, put } from "redux-saga/effects"
import { get_product } from "../main/api"
import { PRODUCT_GET_ERROR, PRODUCT_GET_SUCCESS } from "../main/action"

function* handle_get_product(action) {
    try {
        let { data, status } = yield call(get_product, action)
        console.log(data);

        yield put({ type: PRODUCT_GET_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: PRODUCT_GET_ERROR, payload: err })
    }
}

export { handle_get_product }
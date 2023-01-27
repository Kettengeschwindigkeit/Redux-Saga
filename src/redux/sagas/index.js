import { takeEvery, put, call } from "@redux-saga/core/effects";
import { GET_LATEST_NEWS } from "../constants";
import { getLatestNews } from "../../api";
import { setLatestNews } from "../actions/actionCreator";

export function* handleLatestNews() {
    const { hits } = yield call(getLatestNews, 'react');
    yield put(setLatestNews(hits));
}

export function* watchClickSaga() {
    yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
    console.log('Hello world!');
    yield watchClickSaga();
}

// ===========================================================================================================================================================================================================

// import { take, takeEvery, takeLatest, takeLeading, select } from "@redux-saga/core/effects";
// import { INCREASE_COUNT, DECREASE_COUNT } from "../constants";

// const delay = (time) => new Promise((resolve, reject) => {
//     setTimeout(resolve, time * 1000);
// })

// export function* workerSaga() {
//     const count = yield select(({ counter }) => counter.count);
//     yield delay(2);
//     console.log(`request ${count}`);
// }

// export function* watchClickSaga() {
//     yield takeLatest(INCREASE_COUNT, workerSaga);
//     yield takeLeading(INCREASE_COUNT, workerSaga);
// }

// export default function* rootSaga() {
//     console.log('Hello world!');
//     yield watchClickSaga();
// }

// ===========================================================================================================================================================================================================

// import { take, takeEvery } from "@redux-saga/core/effects";
// import { INCREASE_COUNT, DECREASE_COUNT } from "../constants";

// export function* workerSaga() {
//     console.log('request 2');
//     yield;
// }

// export function* watchClickSaga() {
//     yield take(INCREASE_COUNT);
//     console.log('request 1');
//     yield takeEvery(DECREASE_COUNT, workerSaga);
// }

// export default function* rootSaga() {
//     console.log('Hello world!');
//     yield watchClickSaga();
// }

// ===========================================================================================================================================================================================================

// import { take, takeEvery } from "@redux-saga/core/effects";
// import { INCREASE_COUNT, DECREASE_COUNT } from "../constants";

// export function* workerSaga() {

// }

// export function* watchClickSaga() {
//     yield take(INCREASE_COUNT);
//     console.log('request 1');
//     yield takeEvery(DECREASE_COUNT, () => console.log('request 2'));
// }

// export default function* rootSaga() {
//     console.log('Hello world!');
//     yield watchClickSaga();
// }

import { takeEvery, put, call, fork } from "@redux-saga/core/effects";
import { GET_NEWS } from "../constants";
import { getLatestNews, getPopularNews } from "../../api";
import { setLatestNews, setPopularNews } from "../actions/actionCreator";

export function* handleLatestNews() {
    const { hits } = yield call(getLatestNews, "react");
    yield put(setLatestNews(hits));
}

export function* handlePopularNews() {
    const { hits } = yield call(getPopularNews);
    yield put(setPopularNews(hits));
}

export function* handleNews() {
    // yield call(handleLatestNews);
    // yield call(handlePopularNews);
    yield fork(handleLatestNews);
    yield fork(handlePopularNews);
}

export function* watchClickSaga() {
    yield takeEvery(GET_NEWS, handleNews);
}

export default function* rootSaga() {
    console.log('Hello world!');
    yield watchClickSaga();
}

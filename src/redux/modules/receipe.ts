import { receipeApi } from "@/utils/api";
import { SEARCH as SEARCH_URL } from "@/constants/endpoints";

import { Detail, Meal, ReceipeState } from "@receipe/redux-store";
import { call, put, takeLatest } from "redux-saga/effects";

// NETWORK IO (DB CONNECTION) => 비동기
const SEARCH = "RECEIPE/SEARCH" as const;
const FETCH_DETAIL = "RECEIPE/FETCH_DETAIL" as const;

// 비동기일 필요가 없음
const SET_LIST = "RECEIPE/SET_LIST" as const;
const SET_CURRENT_RECEIPE = "RECEIPE/SET_CURRENT_RECEIPE" as const;
const SET_ERROR = "RECEIPE/SET_ERROR" as const;
const RESET_ERROR = "RECEIPE/RESET_ERROR" as const;

export const receipeSearch = (term: string) => ({
  type: SEARCH,
  payload: term,
});

export const receipeFetchDetail = (id: number) => ({
  type: FETCH_DETAIL,
  payload: id,
});

const receipeSetList = (list: Array<Meal>) => ({
  type: SET_LIST,
  payload: list,
});

const receipeSetCurrent = (current: Detail) => ({
  type: SET_CURRENT_RECEIPE,
  payload: current,
});

const receipeSetError = (e: any) => ({
  type: SET_ERROR,
  payload: e,
});

const receipeResetError = () => ({
  type: RESET_ERROR,
});

const initialState: ReceipeState = { list: [] };

type ReceipeAction = ReturnType<
  | typeof receipeSetList
  | typeof receipeSetCurrent
  | typeof receipeSetError
  | typeof receipeResetError
>;

export default function reducer(
  state = initialState,
  action: ReceipeAction
): ReceipeState {
  switch (action.type) {
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case SET_LIST: {
      console.log(action.payload);
      return {
        ...state,
        list: action.payload,
      };
    }
    default:
      return state;
  }
}

interface SearchResponse {
  meals?: Array<{ idMeal: number; strMeal: string; strCategory: string }>;
}

const searchApi = (term: string) =>
  receipeApi().get<SearchResponse>(SEARCH_URL(term));

function* searchSaga(action: ReturnType<typeof receipeSearch>) {
  try {
    const { payload } = action;
    const response: { data: SearchResponse } = yield call(searchApi, payload);

    // response.data.meal? -> 있으면 : api 데이터를 정제해서 list 담아줘야 함
    // 없으면, 빈 리스트로 끝내야함

    let list: Array<Meal>;
    if (response.data.meals) {
      list = response.data.meals.map(
        (data): Meal => ({
          id: data.idMeal,
          name: data.strMeal,
          category: data.strCategory,
        })
      );
    } else {
      list = [];
    }

    yield put(receipeSetList(list));
  } catch (e) {
    yield put(receipeSetError(e));
  }
}

export function* receipeSaga() {
  yield takeLatest(SEARCH, searchSaga);
}

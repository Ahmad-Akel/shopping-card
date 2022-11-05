import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import productSaga from "./productSaga";
import createSagaMiddleware from "redux-saga";

const sagaMileware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMileware],
});

sagaMileware.run(productSaga);

export default store;

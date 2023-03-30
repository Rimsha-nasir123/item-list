import { createStore } from "redux";
import rootReducer from "./Redux/Reducers/index.reducer";

export const store = createStore(rootReducer);
// export const store = createStore(() => {
//   items: [
//     {
//       name: "rimi",
//       inc: 1,
//     },
//   ];
// });

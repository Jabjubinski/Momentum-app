import { configureStore } from "@reduxjs/toolkit";
import statusesReducer from "./slices/statusesSlice";
import prioritiesReducer from "./slices/prioritiesSlice";
import departmentsReducer from "./slices/departmentsSlice";
import employeesReducer from "./slices/employeesSlice";
import commentsReducer from "./slices/commentsSlice";
import tasksReducer from "./slices/taskSlice";
import taskDetailsReducer from "./slices/taskDetailsSlice";

//keeps all the api data
const store = configureStore({
  reducer: {
    statuses: statusesReducer,
    priorities: prioritiesReducer,
    departments: departmentsReducer,
    employees: employeesReducer,
    comments: commentsReducer,
    tasks: tasksReducer,
    taskDetails: taskDetailsReducer,
  },
});

export default store;

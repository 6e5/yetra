import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";
import UsersReducer from "./reducer_users";

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  users: UsersReducer
});

export default rootReducer;

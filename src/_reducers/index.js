import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { confirmation } from './confirmation.reducer';

import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { getallbill } from "./getallbill.reducer";
import { createtransaction } from "./createtransaction.reducer";
import {gettransaction} from "./gettransaction.reducer";

const rootReducer = combineReducers({
  confirmation,
  authentication,
  registration,
  users,
  alert,
  getallbill,
  createtransaction,
  gettransaction
});

export default rootReducer;
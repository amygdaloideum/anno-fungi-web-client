declare var window: Window & { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any };
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  default as authenticationReducer, State as AuthenticationState,
} from './auth/reducer';

export type RootState = {
  form: any;
  authentication: AuthenticationState;
};

const rootReducer = combineReducers<RootState>({
  authentication: authenticationReducer,
  form: formReducer,
});

// rehydrating state on app start: implement here...
const recoverState = (): RootState => ({} as RootState);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWares = applyMiddleware();

export const store = createStore(
  rootReducer,
  recoverState(),
  composeEnhancers(middleWares),
);

export type Store = { getState: () => RootState, dispatch: Function };

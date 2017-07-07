import actionCreatorFactory from 'redux-typescript-actions';
import { isType } from 'redux-typescript-actions';
import { Action as ReduxAction } from 'redux';
const actionCreator = actionCreatorFactory();

export const ActionCreators = {
  setAccountId: actionCreator<string>('SOMETHING_HAPPENED'),
};

export type State = {
  readonly accountId?: string;
};

export const initialState: State = {};

export default function reducer(state: State = initialState, action: ReduxAction): State {
  let partialState: Partial<State> | undefined;

  if (isType(action, ActionCreators.setAccountId)) {
    partialState = { accountId: action.payload };
  }

  return { ...state, ...partialState };
}
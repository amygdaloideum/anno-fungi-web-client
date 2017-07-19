import * as React from 'react';
import { connect } from 'react-redux';
import { returntypeof } from 'react-redux-typescript';

import { RootState } from '../../store';

const mapStateToProps = (storeState: RootState) => ({
  test: storeState.authentication.test,
});

const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps;
type State = {};

export class AuthContainer extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <div>
        <span>{this.props.test}</span>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AuthContainer as any);

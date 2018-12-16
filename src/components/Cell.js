// @flow

import * as React from 'react';

type Props = {
  digit: ?number,
  row: number,
  column: number,
  squareBlock: number,
  active: boolean,
  focus: boolean,
  changeActive: Function
};

type State = {
  digit: ?number
}

class Cell extends React.Component<Props, State> {
  constructor(props: Object) {
    super(props);

    this.state = {
      digit: this.props.digit
    }
  }
  render() {
    return <td>
      <input
        value={ this.state.digit }
        style={ { width: '10px', border: '0px' } }
        className={ `${this.props.active ? 'active ': ''}${this.props.focus ? 'focus': ''}` }
        maxLength={1}
        onClick={ () => {
          this.props.changeActive(this.props.column, this.props.row, this.props.squareBlock)
        } }
        onChange={(e) => this.setState({digit: e.target.value})}
      />
    </td>;
  }
}

export default Cell;
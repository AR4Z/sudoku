// @flow

import React from 'react';

type State = {
  active: boolean
}

type Props = {
  digit: number,
  row: number,
  column: number,
  changeActive: Function
}

class Cell extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }

  render() {
    return <td>
      <input
        value={ this.props.digit }
        style={ { width: '10px', border: '0px' } }
        className={ this.state.active ? 'active': '' }
        maxLength={1}
        onClick={ () => {
          this.setState({ active: true })
          this.props.changeActive(this.props.column, this.props.row)
        } }/>
    </td>
  }
}

export default Cell;
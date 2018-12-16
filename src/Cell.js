// @flow

import React from 'react';

type Props = {
  digit: number,
  row: number,
  column: number,
  changeActive: Function
}

class Cell extends React.Component<Props> {
  render() {
    return <td>
      <input
        value={ this.props.digit }
        style={ { width: '10px', border: '0px' } }
        className={ `${this.props.active ? 'active ': ''}${this.props.focus ? 'focus': ''}` }
        maxLength={1}
        onClick={ () => {
          this.props.changeActive(this.props.column, this.props.row, this.props.squareBlock)
        } }/>
    </td>
  }
}

export default Cell;
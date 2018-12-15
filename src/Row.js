// @flow

import React from 'react';
import Cell from './Cell.js';

type State = {
  cells: Array<Cell>
}

type Props = {
  row: number
}

class Row extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      cells: this.getCells()
    }
  }

  getCells() {
    let cells = [];

    for (let numCol = 0; numCol <= 8; numCol++) {
      const cell = <Cell
        digit={ 1 }
        active={ false }
        changeActive={ (col, row) => this.props.changeActive(col, row) }
        key={ numCol }
        row={ this.props.row }
        column={ numCol }></Cell>

      cells.push(cell)
    }

    return cells;
  }
  render() {
    return <tr>
      { this.state.cells }
    </tr>
  }
}

export default Row;
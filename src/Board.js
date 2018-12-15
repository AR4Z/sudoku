// @flow

import React from 'react';
import Row from './Row.js';

type State = {
  activeCell: {
    column: number,
    row: number
  },

  rows: Array<Row>
} 


class Board extends React.Component<State> {
  constructor(props) {
    super(props);

    this.state = {
      activeCell: {
        column: null,
        row: null
      },

      rows: this.generateRows()
    }
  }

  changeActive(col, row) {
    this.setState({ activeCell: { column: col, row: row } })
  }

  generateRows() {
    let rows = [];

    for (let numRow = 0; numRow <= 8; numRow++) {
      const row = <Row
        changeActive={ this.changeActive.bind(this) }
        key={ numRow }
        row={ numRow }></Row>;

      rows.push(row); 
    }

    return rows;
  }

  render() {
    return <table style={{ border:'3px solid black', borderCollapse:'collapse'  }}>
      <tbody>
        { this.state.rows }
      </tbody>
    </table>
  }
}

export default Board;

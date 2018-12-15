// @flow

import React from 'react';
import Cell from './Cell.js';
import Row from './Row.js';

type State = {
  activeCell: {
    column: number,
    row: number
  },

  rows: Array<Cell>
} 


class Board extends React.Component<State> {
  constructor(props) {
    super(props);

    this.state = {
      activeCell: {
        column: null,
        row: null
      },

      rows: null
    }
  }

  changeActive(col, row) {
    this.setState({ activeCell: { column: col, row: row } }, this.generateRows.bind(this))
  }

  generateRows() {
    let rows = [];
    let cells = [];

    for (let numRow = 0; numRow <= 8; numRow++) {
      cells = []
      for(let numCol = 0; numCol <= 8; numCol++) {
        cells.push(<Cell
          digit={1}
          column={ numCol }
          row={ numRow }
          key={ numCol }
          focus={ this.state.activeCell.column === numCol }
          active={ this.state.activeCell.column === numCol && this.state.activeCell.row === numRow }
          changeActive={(col, row) => this.changeActive(col, row)}>
        </Cell>)
      }

      const row = <Row cells={ cells } key={ numRow } focus={ this.state.activeCell.row === numRow }></Row>
      rows.push(row); 
    }

    this.setState({rows: rows})
  }

  componentDidMount() {
    this.generateRows()
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

// @flow

import React from 'react';

import Cell from './Cell';
import Row from './Row';

type State = {
  activeCell: {
    column: number,
    row: number
  },
  activeSquareBlock: number,
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
      activeSquareBlock: null,
      rows: null
    };
  }

  changeActive(activeCol, activeRow, activeSquareBlock) {
    this.setState({
      activeCell: {
        column: activeCol,
        row: activeRow
      },
      activeSquareBlock: activeSquareBlock },
      this.generateRows.bind(this)
    );
  }

  generateRows() {
    let rows = [];
    let cells = [];
    let squareBlock = 0;

    for (let numRow = 0; numRow <= 8; numRow++) {
      cells = []

      for(let numCol = 0; numCol <= 8; numCol++) {
        squareBlock = 0;

        if(numRow <= 2) {
          if(numCol <= 2) {
            squareBlock = 0;
          } else if(numCol > 2 && numCol <= 5) {
            squareBlock = 1;
          } else {
            squareBlock = 2;
          }
        } else if(numRow > 2 && numRow <= 5){
          if(numCol <= 2) {
            squareBlock = 3;
          } else if(numCol > 2 && numCol <= 5) {
            squareBlock = 4;
          } else {
            squareBlock = 5;
          }
        } else {
          if(numCol <= 2) {
            squareBlock = 6;
          } else if(numCol > 2 && numCol <= 5) {
            squareBlock = 7;
          } else {
            squareBlock = 8;
          }
        }

        cells.push(<Cell
          digit={1}
          column={ numCol }
          row={ numRow }
          key={ numCol }
          focus={ this.state.activeCell.column === numCol || this.state.activeSquareBlock === squareBlock }
          squareBlock={ squareBlock }
          active={ this.state.activeCell.column === numCol && this.state.activeCell.row === numRow }
          changeActive={(col, row, activeSquareBlock) => this.changeActive(col, row, activeSquareBlock)}>
        </Cell>)
      }

      const row = <Row cells={ cells } key={ numRow } focus={ this.state.activeCell.row === numRow }></Row>
      rows.push(row); 
    }

    this.setState({
      rows: rows
    })
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

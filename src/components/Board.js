// @flow

import * as React from 'react';

import Cell from './Cell';
import Row from './Row';
import { calculateSquareBlock } from '../common/utils';

type State = {
  activeCell: {
    column: ?number,
    row: ?number
  },
  activeSquareBlock: ?number,
  rows: ?Array<React.Element<typeof Row>>
};


class Board extends React.Component<{} , State> {
  constructor(props: Object) {
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

  changeActive(activeCol: number, activeRow: number, activeSquareBlock: number): void {
    this.setState({
      activeCell: {
        column: activeCol,
        row: activeRow
      },
      activeSquareBlock: activeSquareBlock },
      this.generateRows.bind(this)
    );
  }

  generateRows(): void {
    let rows: Array<React.Element<typeof Row>> = [];
    let cells: Array<React.Element<typeof Cell>> = [];
    let squareBlock: number = 0;
    const handleChangeActive = (col: number, row: number, activeSquareBlock: number): void => {
      this.changeActive(col, row, activeSquareBlock)
    }

    for (let numRow = 0; numRow <= 8; numRow++) {
      cells = []
      for(let numCol = 0; numCol <= 8; numCol++) {
        squareBlock = calculateSquareBlock(numCol, numRow);
    
        cells.push(<Cell
          key={ numCol }
          digit={1}
          squareBlock={ calculateSquareBlock(numCol, numRow) }
          column={ numCol }
          row={ numRow }
          focus={ this.state.activeCell.column === numCol || this.state.activeSquareBlock === squareBlock }
          active={ this.state.activeCell.column === numCol && this.state.activeCell.row === numRow }
          changeActive={ handleChangeActive }>
        </Cell>)
      }

      const row: React.Element<typeof Row> = <Row cells={ cells } key={ numRow } focus={ this.state.activeCell.row === numRow }></Row>
      rows.push(row);
    }

    this.setState({
      rows: rows
    });
  }

  componentDidMount() {
    this.generateRows();
  }

  render() {
    return <table style={{ border:'3px solid black', borderCollapse:'collapse'  }}>
      <tbody>
        { this.state.rows }
      </tbody>
    </table>;
  }
}

export default Board;

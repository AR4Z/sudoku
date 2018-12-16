// @flow

import * as React from 'react';
import Cell from './Cell';

type Props = {
  cells: Array<React.Element<typeof Cell>>,
  focus: boolean
};

function Row (props: Props) {
  return (<tr className={ props.focus ? 'focus' : '' }>
    { props.cells }
  </tr>);
}

export default Row;
// @flow

import React from 'react';

const Row = ({ cells, focus }) => {
  return (<tr className={focus ? 'focus' : ''}>
    { cells }
  </tr>)
}

export default Row;
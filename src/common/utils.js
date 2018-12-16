// @flow

export function calculateSquareBlock(col: number, row: number): number {
  let squareBlock: number = 0;

  if(row <= 2) {
    if(col <= 2) {
      squareBlock = 0;
    } else if(col > 2 && col <= 5) {
      squareBlock = 1;
    } else {
      squareBlock = 2;
    }
  } else if(row > 2 && row <= 5){
    if(col <= 2) {
      squareBlock = 3;
    } else if(col > 2 && col <= 5) {
      squareBlock = 4;
    } else {
      squareBlock = 5;
    }
  } else {
    if(col <= 2) {
      squareBlock = 6;
    } else if(col > 2 && col <= 5) {
      squareBlock = 7;
    } else {
      squareBlock = 8;
    }
  }

  return squareBlock;
}

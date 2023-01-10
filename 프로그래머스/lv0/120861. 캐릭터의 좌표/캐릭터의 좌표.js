function solution(keyinput, board) {
  maxRow = Math.floor(board[0] / 2);
  maxCol = Math.floor(board[1] / 2);

  const position = [0, 0];

  const keyInput = (position, input) => {
    switch (input) {
      case "up":
        position[1] += 1;
        break;
      case "down":
        position[1] -= 1;
        break;
      case "left":
        position[0] -= 1;
        break;
      case "right":
        position[0] += 1;
        break;
      default:
        break;
    }
    if (position[0] > maxRow) {
      position[0] = maxRow;
    } else if (position[0] < -maxRow) {
      position[0] = -maxRow;
    } else if (position[1] > maxCol) {
      position[1] = maxCol;
    } else if (position[1] < -maxCol) {
      position[1] = -maxCol;
    }
  };

  keyinput.forEach((v) => keyInput(position, v));

  return position;
}
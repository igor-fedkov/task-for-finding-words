const biases = [{ x: 0, y: -1 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }];

const findNextLetter = (arr, word, currentIndexLetter, stackMove) => {

  if (currentIndexLetter === word.length) {
    return true;
  }

  const { x, y } = stackMove[currentIndexLetter - 1];
  const size = arr[0].length;

  for (const bias of biases) {
    if (x + bias.x < 0 || y + bias.y < 0 ||
        x + bias.x === size || y + bias.y === size) {
      continue;
    }

    if (arr[y + bias.y][x + bias.x] === word[currentIndexLetter]) {
      stackMove.push({ x: x + bias.x, y: y + bias.y });

      if (findNextLetter(arr, word, currentIndexLetter + 1, stackMove))
      {
        return true;
      }

      stackMove.pop();
    }
  }

  return false;
}

export default findNextLetter;
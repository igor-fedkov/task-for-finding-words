import findNextLetter from './findNextLetter';

const biases = [{ x: 0, y: -1 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }];

const findAdditionalVariants = (arr, word, currentIndex, stackMove ) => {
  if (currentIndex === 0) {
    return false;
  }

  const size = arr[0].length;

  const { x, y } = stackMove[currentIndex - 1];
  const biasIndex = biases.findIndex(bias => bias.x === stackMove[currentIndex].x - stackMove[currentIndex - 1].x &&
                                             bias.y === stackMove[currentIndex].y - stackMove[currentIndex - 1].y);
  
  stackMove.pop();

  for (let i = biasIndex + 1; i < 4; i += 1) {
    if (x + biases[i].x < 0 || y + biases[i].y < 0 ||
        x + biases[i].x === size || y + biases[i].y === size) {
      continue;
    }

    if (arr[y + biases[i].y][x + biases[i].x] === word[currentIndex]) {
      stackMove.push({x: x + biases[i].x, y: y + biases[i].y});

      if (findNextLetter(arr, word, currentIndex + 1, stackMove))
      {
        return true;
      }
    }
  }

  currentIndex -= 1;
    
  return findAdditionalVariants(arr, word, currentIndex, stackMove );
}

export default findAdditionalVariants;
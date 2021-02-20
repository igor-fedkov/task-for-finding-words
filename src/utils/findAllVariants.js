import findNextLetter from './findNextLetter';
import findAdditionalVatiants from './findAdditionalVariants';

const findAllVariants = (matrix, word) => {
  const size = Math.ceil(Math.sqrt(matrix.length));
  const allVariants = [];
  const arr = [];

  allVariants.length = 0;

  for (let i = 0; i < size; i += 1) {
    const row = [];
    for (let j = 0; j < size; j += 1) {
      row.push(matrix[i * size + j]);
    }
    arr.push(row);
  }

  let startIndex = 0;
  let currentIndex = 0;
  let isResult = false;
  const stackMove = [];

  currentIndex = matrix.indexOf(word[0], startIndex);
  while (currentIndex >= 0) {
    const x = currentIndex % size;
    const y = Math.trunc(currentIndex / size);

    stackMove.push({ x, y });
    isResult = findNextLetter(arr, word, 1, stackMove);

    if (isResult) {
      allVariants.push( [...stackMove] );

      if (word.length > 1) {        
        
        while (findAdditionalVatiants(arr, word, word.length - 1, stackMove)) {
          allVariants.push( [...stackMove] );
        }
      }
    }
    
    startIndex = currentIndex + 1;
    currentIndex = matrix.indexOf(word[0], startIndex);
    isResult = false;
    stackMove.length = 0;
  }//currentIndex >= 0

  // console.log('allVariants', allVariants);
  return allVariants;
}

export default findAllVariants;
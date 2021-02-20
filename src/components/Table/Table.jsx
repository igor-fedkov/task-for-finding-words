import s from './Table.module.css';

const Table = ({ matrix, allVariants, currentVariant }) => {
    
  const size = Math.ceil(Math.sqrt(matrix.length));

  const arr = [];
  for (let y = 0; y < size; y += 1) {
    const row = [`${y + 1}`];
    for (let x = 0; x < size; x += 1) {
      if (matrix[y * size + x]) {
        row.push(matrix[y * size + x]);
      }
      else {
        row.push('');
      }
    }
    arr.push(row);
  }

  const arrHighlights = [];
  for (let i = 0; i < size + 1; i += 1) {
    arrHighlights[i] = [];
    for (let j = 0; j < size; j += 1) {
      arrHighlights[i][j] = false;
    }
  }

  if (currentVariant >= 0) {
    if (currentVariant === 0) {
      for (let variant = 0; variant < allVariants.length; variant += 1) {
        for (let i = 0; i < allVariants[variant].length; i += 1) {
          const x = allVariants[variant][i].x + 1;
          const y = allVariants[variant][i].y;

          arrHighlights[y][x] = true;
        }//i
      }//variant
    }
    else {
      for (let i = 0; i < allVariants[currentVariant - 1].length; i += 1) {
        const x = allVariants[currentVariant - 1][i].x + 1;
        const y = allVariants[currentVariant - 1][i].y;

        arrHighlights[y][x] = true;
      }
    }
  }

  const tableData = arr.map((row, indexRow) => {
    return (
      <tr key={`r${indexRow}`}>
        {row.map((cell, indexCell) => {
          return (
            <td className={`${indexCell > 0 ? s.cell : s.headerCell} ${arrHighlights[indexRow][indexCell] && s.highlightCell}`} key={`${indexRow}-${indexCell}`}>
              {cell}
            </td>
          )
        })}
      </tr>
    )
  }) 

  const tableHeader = [<th key='0'></th>];
  for (let i = 1; i <= size; i += 1) {
    tableHeader.push(<th className={s.headerCell} key={i.toString()}>{i.toString()}</th>);
  }

  return (
    <table className={s.table}>
      <thead>
        <tr>
          {tableHeader}
        </tr>
      </thead>
      <tbody>
        {tableData}
      </tbody>      
    </table>
  )
}

export default Table;
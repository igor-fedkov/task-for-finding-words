import s from './Routes.module.css';

const RouteToString = (route) => {
  return route
    .map(step => `(${step.y + 1}, ${step.x + 1})`)
    .join(' -> ');
}

const Routes = ({ allVariants, currentVariant, onLeftBtnClick, onRightBtnClick }) => {
  const countVariants = allVariants.length;

  if (allVariants.length === 0) {
    return (<h1>Построить путь не возможно!</h1>)
  }

  if (allVariants.length === 1) {
    currentVariant = 1;
  }

  return (
    <>
      <h1>Количество вариантов: {countVariants}</h1>
      {
        countVariants > 1 &&
        <div className={s.btnContainer}>
          <button className={s.leftBtn} type="button" onClick={onLeftBtnClick}>&larr;</button>
          <span className={s.variantNumber}>
            {currentVariant === 0 ? 'Все варианты' : `Вариант ${currentVariant}`}
          </span>
          <button className={s.rightBtn} type="button" onClick={onRightBtnClick}>&rarr;</button>
        </div>
      }

      {
        currentVariant > 0 &&
        <p className={s.routeString}>{RouteToString(allVariants[currentVariant - 1])}</p>
      }

      {
        currentVariant === 0 &&
        <ul className={s.listAllVariants}>
          {allVariants.map((variant, index) =>
            <li className={s.variantsItem} key={index.toString()}>
              {RouteToString(variant)}
            </li>)}
        </ul>
      }
    </>
  )
}

export default Routes;
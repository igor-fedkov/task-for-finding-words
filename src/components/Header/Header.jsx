import { Component } from 'react';

import s from './Header.module.css';

class Header extends Component {
  onChange = (event) => {
    const { name, value } = event.target;
    const { onInput } = this.props;

    onInput({ [name]: value });
  }

  render() {
    const { matrix, word } = this.props;
    
    return (
      <header className={s.header}>
        <label className={s.label}>
          Введите матрицу
          <input className={s.input} type="text" onChange={this.onChange} value={matrix} name="matrix"/>
        </label>

        <label className={s.label}>
          Введите слово
          <input className={s.input} type="text" onChange={this.onChange} value={word} name="word"/>
        </label>
      </header>
    )
  }
}

export default Header;
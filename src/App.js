import { Component } from 'react';

import Header from './components/Header';
import Table from './components/Table';
import Routes from './components/Routes';

import './App.css';

import findAllVariants from './utils/findAllVariants';

class App extends Component {
  state = {
    matrix: 'ABCBEFGHIBBFDFGH',
    word: '',
    allVariants: [],
    currentVariant: -1
  }

  componentDidUpdate(prevProps, prevState) {
    const { matrix, word } = this.state;

    if (prevState.word.length > 0 && word.length === 0) {
      this.setState({
        allVariants: [],
        currentVariant: -1
      });
    }

    if (prevState.word !== word && word.length > 0) {
      const allVariants = findAllVariants(matrix, word);
      const currentVariant = allVariants.length > 0 ? 0 : -1

      this.setState({
        allVariants,
        currentVariant
      });
    }

    if (prevState.matrix !== matrix) {
      this.setState({
        word: ''
      })
    }
  }

  onInputChange = (obj) => {
    this.setState({
      ...obj
    })
  }

  onLeftBtnClick = () => {
    const { currentVariant, allVariants } = this.state;
    
    if (currentVariant > 0) {
      this.setState(state => ({
        currentVariant: state.currentVariant - 1
      }))
      return;
    }
    
    this.setState(() => ({
      currentVariant: allVariants.length
    }))
  }

  onRightBtnClick = () => {
    const { currentVariant, allVariants } = this.state;

    if (currentVariant < allVariants.length) {
      this.setState(state => ({
        currentVariant: state.currentVariant + 1
      }))
      return;
    }
    
    this.setState(() => ({
      currentVariant: 0
    }))
  }

  render() {
    const { matrix, word, allVariants, currentVariant } = this.state;

    return (
      <div className="App">
        <Header
          onInput={this.onInputChange}
          matrix={matrix}
          word={word}
        />

        {matrix.length > 0 &&
          <Table
            matrix={matrix}
            allVariants={allVariants}
            currentVariant={currentVariant}
          />
        }

        {word.length > 0 &&
          <Routes
            allVariants={allVariants}
            currentVariant={currentVariant}
            onLeftBtnClick={this.onLeftBtnClick}
            onRightBtnClick={this.onRightBtnClick}
          />
        }
      </div>
    );
  }
}

export default App;

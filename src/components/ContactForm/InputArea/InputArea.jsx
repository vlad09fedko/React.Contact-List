import { Component } from 'react';

import styles from './inputArea.module.css';

export class InputArea extends Component {
  render() {
    const { value } = this.props;
    return (
      <div key={this.props.name} className={styles.inputArea}>
        <input
          name={this.props.name}
          placeholder={this.props.placeholder}
          type={this.props.type}
          value={value}
          required={this.props.required}
          onChange={this.props.inputHandler}
        />
        <span onClick={this.props.onClearClick}>X</span>
      </div>
    );
  }
}

export default InputArea;

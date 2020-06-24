import React, { Component } from 'react';

class Modal extends Component {
  closeModalWithClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  handleKeyPress = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div className="Overlay" onClick={this.closeModalWithClick}>
        <div className="Modal">
          <img src={this.props.largeUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;

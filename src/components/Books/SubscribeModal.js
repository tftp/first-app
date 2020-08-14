import React from 'react';

import ReactDOM from 'react-dom';

class SubscribeModal extends React.Component {
  constructor(props){
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render(){
    return (
      <>
        <a onClick={this.toggle}>Условия подписки</a>
        {
          this.state.isOpen && ReactDOM.createPortal(
            <div style={styles.overley}>
              <div style={styles.body}>
                Чем больше положишь, тем больше получишь.
                <button onClick={this.toggle}>Закрыть</button>
              </div>
            </div>,
            document.getElementById('modal-root')
          )
        }
      </>
    )
  }
}

export default SubscribeModal;

const styles = {
  overley: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#fff',
    padding: '10px'
  }
}

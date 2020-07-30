import React from 'react';

class FeedbackForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      inputName: '',
      inputEmail: '',
      question: ''
    }

    this.setField = this.setField.bind(this);
    this.getFeedback = this.getFeedback.bind(this);
  }

  setField(name, e){
    this.setState({
      [name]: e.target.value
    });
  }

  getFeedback(){
    console.log(this.state);
  }

  render(){
    return(
      <div style={styles.feedback}>
        <p>Имя: <input onChange={(e) => this.setField('inputName', e)} /></p>
        <p>Email <input onChange={(e) => this.setField('inputEmail', e)} /></p>
        <p>Вопрос <textarea onChange={(e) => this.setField('question', e)} /> </p>
        <button onClick={this.getFeedback}>Отправить</button>
      </div>
  )}
};

export default FeedbackForm;

const styles = {
  feedback: {
    border: '1px solid',
    borderRadius: '5px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  }
}

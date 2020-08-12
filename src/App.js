import React from 'react';

import BookContainer from './components/Books/BookContainer';
import FeedbackForm from './static/FeedbackForm';
import Header from './static/Header';

class App extends React.Component{

  render(){
    return (
      <>
        <Header />
        <main style={style.main}>
          <BookContainer {...this.props} />
        </main>
        <div style={style.feedback}>
          <FeedbackForm />
        </div>
        <footer style={style.footer}>
          &copy; {new Date().getFullYear()}, Thinknetica
        </footer>
      </>
    );
  }
}

export default App;

const style = {
  header:{
    textAlign: "center",
    backgroundColor: '#222222',
    color: '#fff',
    minHeight: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    padding: '10px 10%',
  },
  feedback: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: '10px',
    marginBottom: '10px',
  },
  footer: {
    padding: '0 10%',
    marginTop: '50px',
  }
}

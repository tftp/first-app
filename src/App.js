import React from 'react';

import BooksList from './BooksList';
import FeedbackForm from './FeedbackForm';

class App extends React.Component{
  render(){
    return (
      <>
        <header style={style.header}>
          THIS IS HEADER
        </header>
        <main style={style.main}>
          <BooksList {...this.props} />
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
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  main: {
    padding: '10px 10%',
  },
  feedback: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
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

import React from 'react';

import BookCard from './BookCard';
import AuthorsList from './AuthorsList';

class App extends React.Component{
  render(){
    return (
      <>
        <header style={style.header}>
          THIS IS HEADER
        </header>
        <main style={style.main}>
          <div>
            <AuthorsList authors={this.props.authors} />
          </div>
          <div>
            <BookCard book={this.props.book} />
          </div>
          <div>
            <button>Подписаться</button>
          </div>
        </main>
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
  footer: {
    padding: '0 10%',
    marginTop: '50px',
  }
}

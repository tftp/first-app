import React from 'react';

import AuthorCard from './AuthorCard';

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {allAuthorsVisible: false};
    this.toggleAuthorsVisible = this.toggleAuthorsVisible.bind(this);
  }

  toggleAuthorsVisible(){
      this.setState({ allAuthorsVisible: !this.state.allAuthorsVisible });
  }

  render(){
    const { authors } = this.props;
    const maxAuthor = this.state.allAuthorsVisible ? authors.length : 3;
    return (
      <>
        <div style={styles.container}>
          {authors.slice(0,maxAuthor).map(author => (
            <div key={author.id}>
              <AuthorCard author={author} />
            </div>
          ))}
        </div>
        {(authors.length > 3) &&
          <button onClick={this.toggleAuthorsVisible}>
            Показать/Скрыть всех авторов (всего: {authors.length})
          </button>
        }
      </>
    );
  }
}

export default AuthorsList;

const styles = {
  container: {
    display: 'flex',
  },
}

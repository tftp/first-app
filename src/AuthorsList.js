import React from 'react';

import AuthorCard from './AuthorCard';

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {allAuthorsVisible: false};
  }

  toggleAuthorsVisible(){
      this.setState({ allAuthorsVisible: !this.state.allAuthorsVisible });
  }

  render(){
    const { authors } = this.props;
    const maxAuthor = this.state.allAuthorsVisible ? authors.length : 3;
    return (
      <>
      <table><tbody><tr>
          {authors.slice(0,maxAuthor).map(author => (
            <td key={author.id}>
              <AuthorCard author={author} />
            </td>
          ))}
      </tr></tbody></table>
      { (authors.length > 3) &&
        <button
          onClick={() => this.toggleAuthorsVisible()}
        >
          Показать/Скрыть всех авторов (всего: {authors.length})
        </button>
      }
      </>
    );
  }
}

export default AuthorsList;

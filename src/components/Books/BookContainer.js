import React from 'react';

import BooksList from './BooksList';
import SimilarBooks from './SimilarBooks';

import axios from 'axios';

const API_TOKEN = 'keyXV8VsjAlAKfZA0';

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appPtaE6pkuDQzimK',
  timeout: 1000,
  headers: {
    'Authorization' : `Bearer ${API_TOKEN}`
  }
});

class BookContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      books: null
    }
  }

  componentDidMount(){
     this._fetchDataBook();
  }

  render(){
    const { books } = this.state;
    return (
        books ? (
          <>
            <BooksList {...this.props} books={books} />
            Похожие книги:
            <SimilarBooks {...this.props} books={books} />
          </>
        ) : (<div>Loading...</div>)
    );
  }

  _fetchDataBook(){
    const object = '/Books';
    this._fetchData(object);
  }
  _fetchData(object){
    httpClient.get(object)
      .then(result => result.data)
      .then(this._mapFromAirtableBooks)
      .then(books => {
        this.setState({
          books
        });
      });
  }

  _mapFromAirtableBooks(data){
    return data.records.map(
      record => ({
        Title: record.fields.Title,
        Price: record.fields.Price,
        Cover: record.fields.Cover,
        Description: record.fields.Description,
        Subscribers: record.fields.Subscribers,
        authorId: record.fields.authorId[0],
        id: record.fields.id,
      })
    )
  }
}

export default BookContainer;
